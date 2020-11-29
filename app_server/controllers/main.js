//API connection
const axios = require('axios');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:' + (process.env.PORT || 3000)
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}






/* GET dashboard */
const dashboard = (req, res) => {
  res.render('dashboard', { title: "Nadzorna plošča" });
};

/* GET user profile */
const userProfile = (req, res) => {
  res.render('profile-user', { title: "Moj profil" });
};

/* GET profile for viewers */
const viewProfile = (req, res) => {
  res.render('profile-view', {
    ime: 'Janez',
    priimek: "Novak",
    email: "janez.novak@gmail.com",
    geslo: "password123",
    statusInstruktorja: false,
    datumVpisa: {
      $date: "2019-11-07T00:00:00Z"
    },
    dodatniPodatki: {
      opis: "Sem Janez in obožujem številke!",
      telefonskaStevilka: "041 532 234",
      ocena: 4
    }
  });
};

/* GET chat page */
const chat = (req, res) => {
  axios
  .get('http://localhost:3000/api/chat/' +  req.params.idUserja)
  .then((odgovor) => {
    let nimasPogovora = (odgovor.data.komentar.length > 0) ? null : "Z osebo še nimate pogovora. Pošli novo sporočilo.";
    console.log("nimaspogovora je:" + nimasPogovora);
    
    // f o r m a t i r a j  c a s
    // odgovor.data.komentar.map(posameznoSporocilo => {
      //   posameznoSporocilo.cas = formatirajCas(posameznoSporocilo.cas);
      //   return posameznoSporocilo;
      // });
      prikaziChat(req, res, odgovor.data, nimasPogovora);
    })
    .catch((napaka) => {
    prikaziNapako(req, res, napaka);
  });
};

const prikaziChat = (req, res, pridobljeniPodatki, nimasPogovora) => {
  res.render('chat', { 
    title: "",
    mojaSporocila: pridobljeniPodatki.komentar,
    pridobljenoIme: pridobljeniPodatki.ime,
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

    contactChosen:{ 
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
      ],
      datoteke: [
        {imeDatoteke: "program.c"},
        {imeDatoteke: "slika.jpg"},
        {imeDatoteke: "seminarska.ppt"},
      ]
    },

  });
};


// const formatirajCas = (ura) => {
//   var novaUra = 
//   console.log("DOBILI SMO:" + ura);
// }

const prikaziNapako = (req, res, napaka) => {
  console.log("znotrajjjjj prikaziii napakaaa");
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
  console.log("id userja je:"+ idUserja);
  axios({
    method: 'post',
    url: 'http://localhost:3000/api/chat/' + idUserja,
    data: {
      besedilo: req.body.besedilo
    }
  })
  .then(() => {
    res.redirect('/sporocanje/' + idUserja);
  })
  .catch((napaka) => {
    prikaziNapako(req, res, napaka);
  });
};




module.exports = {
  dashboard,
  userProfile,
  viewProfile,
  chat,
  shraniSporocilo
};