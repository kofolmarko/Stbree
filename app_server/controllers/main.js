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
    // console.log(uporabnikID);
    let loggedInUser;
    axios
      .get(apiParametri.streznik + '/api/uporabnik/' + uporabnikID)
      .then((uporabnik) => {
        loggedInUser = uporabnik.data;
        // console.log(loggedInUser);
      })
      .catch((napaka) => {
        // console.log(napaka);
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
                // console.log("NAJDEM UPORABNIKE ======> " + uporabniki.data);
                // console.log("NAJDEM DOGODKE =======> " + dogodki.data);

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
                });
              })
              .catch((err) => {
                // console.log(err);
              });
          })
          .catch((err) => {
            // console.log(err);
          });
      });
  }
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



/* GET chat page kontakti */
const chat = (req, res) => {
  var profileID = require('./signing').loginID.val;
  axios
    .get('http://localhost:3000/api/chat/' + profileID)
    .then((odgovor) => {
      prikaziChatPagePrvic(req, res, odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const prikaziChatPagePrvic = (req, res, pridobljeniPodatki) => {
  res.render('chat', {
    prvic: pridobljeniPodatki.prvic,
    pridobljeniKontakti: pridobljeniPodatki.pridobljeniKontakti
  });
};

/* GET sporocila dolocenega kontakta */
const pridobiKontakt = (req, res) => {
  var profileID = require('./signing').loginID.val;
  axios
    .get("http://localhost:3000/api/chat/" + profileID + "/" + req.params.idPrejemnika)
    .then((odgovor) => {
      res.send(odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

/* POST poslano spococilo */
const shraniSporocilo = (req, res) => {
  var profileID = require('./signing').loginID.val;

  axios({
    method: 'post',
    url: 'http://localhost:3000/api/chat/' + profileID,
    data: {
      besedilo: req.body.besedilo,
      prejemnikSporocila: req.params.idPrejemnika,
    }
  })
    .then(() => {
      res.redirect('/sporocanje');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};



const mongoose = require('mongoose');

const db = (req, res) => {
  // console.log("rendering...");
  res.render('db');
};

const bazaIzbrisi = (req, res) => {
  mongoose.connection.collections['InstrukcijeDogodki'].drop((err) => {
    // console.log('InstrukcijeDogodki dropped!');
  });
  mongoose.connection.collections['Dela'].drop((err) => {
    // console.log('Dela dropped!');
  });
  res.redirect('/db');
};

const bazaNapolni = (req, res) => {
  let testniPodatkiDogodki = require('./testni_podatki_dogodki.json');
  let testniPodatkiDela = require('./testni_podatki_dela.json');

  for (let i = 0; i < testniPodatkiDogodki.length; i++) {
    // console.log("looping");
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/instrukcije-dogodki',
      data: testniPodatkiDogodki[i]
    })
      .then((response) => {
        if (response) {
          // console.log("Event added to database!");
        }

      })
      .catch((napaka) => {
        console.error("Napaka pri dodajanju v bazo.");
      });
  }

  for (let i = 0; i < testniPodatkiDela.length; i++) {
    // console.log("looping");
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/ponudba-del',
      data: testniPodatkiDela[i]
    })
      .then((response) => {
        if (response) {
          // console.log("Offer added to database!");
        }
      })
      .catch((napaka) => {
        console.error("Napaka pri dodajanju v bazo.");
      });
  }
  res.redirect('/db');
};


module.exports = {
  dashboard,
  chat,
  pridobiKontakt,
  shraniSporocilo,
  db,
  bazaIzbrisi,
  bazaNapolni,
};