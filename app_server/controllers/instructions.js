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

/* GET event list object */
const eventList = (req, res) => {
  axios
    .get('http://localhost:3000/api/instrukcije-dogodki')
    .then((odgovor) => {
      console.log(odgovor.data);
      let sporocilo = odgovor.data.length ? null : "Ne najdem nobenega dogodka :(";
      instructionsEventList(req, res, odgovor.data, sporocilo);
    })
    .catch((err) => {
      instructionsEventList(req, res, [], "Napaka API-ja pri iskanju dogodkov.");
      console.error(err);
    });
};

/* GET instructions events list page */
const instructionsEventList = (req, res, instrukcijeDogodki, sporocilo) => {
  console.log(instrukcijeDogodki);
  res.render('instructions-events-list', {
    instrukcijeDogodki: instrukcijeDogodki,
    sporocilo: sporocilo
  });
};

/* GET instructions event page */
const instructionsEvent = (req, res) => {
  axios
    .get('http://localhost:3000/api/instrukcije-dogodki/dogodek/' + req.params.idDogodka)
    .then((odgovor) => {
      renderInstructionsEvent(req, res, odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const renderInstructionsEvent = (req, res, dogodek) => {
  res.render('instructions-event', {
    naziv: dogodek.naziv,
    opis: dogodek.opis,
    cena: dogodek.cena,
    datum: dogodek.datum,
    steviloProstihMest: dogodek.steviloProstihMest
  });
};

/* GET new instructions page */
const instructionsEventNew = (req, res) => {
  res.render('instructions-event-new', { title: "Dodaj" });
};

const instructionsEventNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum || !req.body.steviloProstihMest) {
    console.log("izpolni vsa polja");
  } else {
    console.log("posting to: " + apiParametri.streznik);
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/instrukcije-dogodki',
      data: {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        steviloProstihMest: req.body.steviloProstihMest
      }
    }).then((dogodek) => {
      console.log("posted");
      console.log(dogodek.data);
      res.redirect('/instrukcije-dogodki');
      
    }).catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
  }
};

/* DELETE instructions event */
const instructionsEventDelete = (req, res) => {
  axios
    .delete('http://localhost:3000/api/instrukcije-dogodki/' + idDogodka)
    .then((dogodek) => {
      console.log("Deleted the following event:");
      console.log(dogodek.data);
      res.redirect('/instrukcije-dogodki');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
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
  eventList,
  //instructionsEventList,
  instructionsEvent,
  instructionsEventNew,
  instructionsEventNewPost,
  instructionsEventDelete,
  instructionsUser
};