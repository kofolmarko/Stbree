/* API CONNECTION */
const axios = require('axios');

var apiParametri = {
  streznik: 'http://localhost:' + (process.env.PORT || 3000)
};

if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}

/* GET instructors list page */
const instructorsList = (req, res) => {
  res.render('instructors-list', { title: "Inštruktorji" });
};

/* GET instructions events list page */
const instructionsEventList = (req, res) => {
  res.render('instructions-events-list', { title: "Instrukcije" });
};

/* GET instructions event page */
const instructionsEvent = (req, res) => {
  res.render('instructions-event', { title: "IME DOGODKA" });
};

/* GET new instructions page */
const instructionsEventNew = (req, res) => {
  res.render('instructions-event-new', { title: "Dodaj" });
};

const instructionsEventNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum || !req.body.steviloProstihMest) {
    res.redirect('/instrukcije-dogodki/dodaj?napaka=vrednost');
    console.log("izpolni vsa polja");
  } else {
    axios({
      method: 'post',
      url: apiParametri.streznik + '/api/instrukcije-dogodki',
      data: {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        steviloProstihMest: req.body.steviloProstihMest
      }
    }).then(() => {
      console.log("posted");
      res.redirect('/instrukcije-dogodki');
      
    }).catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
  }
};


/* GET edit instructions page */
const instructionsUser = (req, res) => {
  res.render('instructions-event-edit', { title: "Uredi" });
};

/* ERROR MESSAGE */
const prikaziNapako = (req, res, napaka) => {
  let naslov = "Nekaj je šlo narobe!";
  let vsebina = napaka.response.data["sporočilo"] ?
    napaka.response.data["sporočilo"] : (napaka.response.data["message"] ?
      napaka.response.data["message"] : "Nekaj nekje očitno ne deluje.");
  if (napaka.response.data["_message"] == "Lokacija validation failed") {
    //res.redirect(
      //'/instrukcije-dogodki/dodaj?napaka=vrednost'
    //);
    console.log("izpolni vsa polja");
  } else {
    res.render('error', {
      message: naslov,
      error: {
        status: vsebina,
        stack: "404 - user declared"
      }
    });
  }
};


module.exports = {
  instructorsList,
  instructionsEventList,
  instructionsEvent,
  instructionsEventNew,
  instructionsEventNewPost,
  instructionsUser
};