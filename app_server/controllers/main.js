//API connection
const axios = require('axios');
const { uporabniki } = require('../../app_api/controllers/users');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:3000'
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}

/* GET dashboard */
const dashboard = async (req, res) => {
  if (require('./signing').loginStatus.val == false) {
    res.redirect('/');
  } else {
    let uporabnikID = require('./signing').loginID.val;
    console.log(uporabnikID);
    let loggedInUser;
    axios
      .get(apiParametri.streznik + '/api/uporabnik/' + uporabnikID)
      .then((uporabnik) => {
        //console.log(uporabnik);
        loggedInUser = uporabnik.data;
        console.log(loggedInUser);
      })
      .catch((napaka) => {
        console.log(napaka);
      });

    axios
      .get(apiParametri.streznik + '/api/instruktorji')
      .then((uporabniki) => {


        axios
          .get(apiParametri.streznik + '/api/instrukcije-dogodki')
          .then((dogodki) => {


            axios
              .get(apiParametri.streznik + '/api/ponudba-del')
              .then((dela) => {
                console.log("NAJDEM UPORABNIKE ======> " + uporabniki.data);
                console.log("NAJDEM DOGODKE =======> " + dogodki.data);

                for (i = uporabniki.data.length; i < 3; i++) {
                  uporabniki.data.unshift({ ime: "Ne najdem ničesar :(", email: "Ni zanimivih inštruktorjev..." });
                }

                for (i = dogodki.data.length; i < 3; i++) {
                  dogodki.data.unshift({ ime: "Ne najdem ničesar :(", opis: "Ni novih dogodkov..." });
                }

                for (i = dela.data.length; i < 3; i++) {
                  dela.data.unshift({ ime: "Ne najdem ničesar :(", opis: "Ni novih ponudb..." });
                }

                var loginName = require('./signing').loginName.val;
                console.log(loginName);

                res.render('dashboard', {
                  f1: { ime: uporabniki.data[uporabniki.data.length - 1].ime, predmeti: uporabniki.data[uporabniki.data.length - 1].email, u1: uporabniki.data[uporabniki.data.length - 1] },
                  f2: { ime: uporabniki.data[uporabniki.data.length - 2].ime, predmeti: uporabniki.data[uporabniki.data.length - 2].email, u2: uporabniki.data[uporabniki.data.length - 2] },
                  f3: { ime: uporabniki.data[uporabniki.data.length - 3].ime, predmeti: uporabniki.data[uporabniki.data.length - 3].email, u3: uporabniki.data[uporabniki.data.length - 3] },

                  f4: { ime: dogodki.data[dogodki.data.length - 1].naziv, predmeti: dogodki.data[dogodki.data.length - 1].opis, d1: dogodki.data[dogodki.data.length - 1] },
                  f5: { ime: dogodki.data[dogodki.data.length - 2].naziv, predmeti: dogodki.data[dogodki.data.length - 2].opis, d2: dogodki.data[dogodki.data.length - 2] },
                  f6: { ime: dogodki.data[dogodki.data.length - 3].naziv, predmeti: dogodki.data[dogodki.data.length - 3].opis, d3: dogodki.data[dogodki.data.length - 3] },

                  f7: { ime: dela.data[dela.data.length - 1].naziv, predmeti: dela.data[dela.data.length - 1].opis, d1: dela.data[dela.data.length - 1] },
                  f8: { ime: dela.data[dela.data.length - 2].naziv, predmeti: dela.data[dela.data.length - 2].opis, d2: dela.data[dela.data.length - 2] },
                  f9: { ime: dela.data[dela.data.length - 3].naziv, predmeti: dela.data[dela.data.length - 3].opis, d3: dela.data[dela.data.length - 3] },

                  dogodki: loggedInUser.dogodki,
                  imePrijavljenega: loginName
                  //dela: uporabnik.data.dela
                });

              })
              .catch((err) => {
                console.log("err in dela search");
              });
          })
          .catch((err) => {
            console.log("err in dogodki search");
          });
      });
  }
};

/* GET user profile */
const userProfile = (req, res) => {
  res.render('profile-user', { title: "Moj profil" });
};

/* GET profile for viewers */
const viewProfile = (req, res) => {
  res.render('profile-view');
};

/* GET chat page */
const chat = (req, res) => {
  axios
    .get(apiParametri.streznik + '/api/chat/' + req.params.idUserja, {
      params: {
        idPrejemnika: "5fc3f5a8abd8100011de120d",
      }
    })
    .then((odgovor) => {
      //let nimasPogovora = (odgovor.data.komentar.length > 0) ? null : "Z osebo še nimate pogovora. Pošli novo sporočilo.";
      //console.log("nimaspogovora je:" + nimasPogovora);
      console.log("znotraj then in podatki so" + odgovor.data);
      prikaziChat(req, res, odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const prikaziChat = (req, res, pridobljeniPodatki) => {

  var matchingSporocila = new Array((pridobljeniPodatki.prviUser.poslanaSporocila.length + pridobljeniPodatki.drugiUser.poslanaSporocila.length));

  var stevec = 0;
  for (var i = 0; i < pridobljeniPodatki.prviUser.poslanaSporocila.length; i++) {
    if (pridobljeniPodatki.prviUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.drugiUser.ime) {
      matchingSporocila[stevec] = pridobljeniPodatki.prviUser.poslanaSporocila[i];
      stevec++;
    }
  }
  var nimasPogovora = (matchingSporocila.length > 0) ? null : "Z osebo še nimate pogovora. Pošli novo sporočilo.";

  for (var j = 0; j < pridobljeniPodatki.drugiUser.poslanaSporocila.length; j++) {
    if (pridobljeniPodatki.drugiUser.poslanaSporocila[j].prejemnikSporocila == pridobljeniPodatki.prviUser.ime) {
      matchingSporocila[stevec] = pridobljeniPodatki.drugiUser.poslanaSporocila[j];
      stevec++;
    }
  }

  sortedSporocila = matchingSporocila.sort((a, b) => b.cas - a.cas);

  res.render('chat', {
    title: "",
    sortedSporocilaa: sortedSporocila,
    mojeIme: pridobljeniPodatki.mojeIme,
    // kolegovooIme: kolegovoIme,
    nimasPogovora: nimasPogovora,

    contacts: [{
      ime: "Steve Gates",
      slika: "/assets/pics/instruktor1.jpg"
    },
    {
      ime: "Billa Jobs",
      slika: "/assets/pics/instruktor3.jpg"
    },
    {
      ime: "Mark Zuki",
      slika: "/assets/pics/instruktor1.jpg"
    }
    ],

    contactChosen: {
      sporocila: [
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 1",
          cas: "16:20 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 2",
          cas: "16:23 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 3",
          cas: "16:26 | Nov 15"
        }
      ]
    },

  });
};


const prikaziNapako = (req, res, napaka) => {
  let naslov = "Nekaj je šlo narobe!";
  let vsebina = napaka.isAxiosError ?
    "Napaka pri dostopu do oddaljenega vira preko REST API dostopa!" :
    undefined;
  vsebina = (
    vsebina != undefined &&
    napaka.response && napaka.response.data["sporočilo"]
  ) ? napaka.response.data["sporočilo"] : vsebina;
  vsebina = (
    vsebina != undefined &&
    napaka.response && napaka.response.data["message"]
  ) ? napaka.response.data["message"] : vsebina;
  vsebina = (vsebina == undefined) ?
    "Nekaj nekje očitno ne deluje." : vsebina;
  res.render('genericno-besedilo', {
    title: naslov,
    vsebina: vsebina
  });
};


// shrani poslano sporocilo

const shraniSporocilo = (req, res) => {
  const idUserja = req.params.idUserja;
  console.log("v metodi shrani sporocilo sid userja je:" + idUserja);
  axios({
    method: 'post',
    url: apiParametri.streznik + '/api/chat/' + idUserja,
    data: {
      besedilo: req.body.besedilo,
      prejemnikSporocila: "Manca",
      cas: Date.now()
    }
  })
    .then(() => {
      res.redirect('/sporocanje/' + idUserja);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const db = (req, res) => {
  res.render('db');
};

const bazaIzbrisi = (req, res) => {
  console.log("Server function.");
  
  axios
  .get(apiParametri.streznik + '/api/db/delete')
  .then((baza) => {
    console.log("Celotna baza pobrisana!");
  })
  .catch((napaka) => {
    console.log("Med brisanjem je prišlo do napake!");
    console.log(napaka);
  });
};

const bazaNapolni = (req, res) => {

};


module.exports = {
  dashboard,
  chat,
  shraniSporocilo,
  db,
  bazaIzbrisi,
  bazaNapolni
};