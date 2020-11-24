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


//RENDER instructors
const instructorsList = (req, res) => {
  res.render('instructors-list');
};

//GET instructions events list
const eventList = (req, res) => {
  axios
    .get('http://localhost:3000/api/instrukcije-dogodki')
    .then((odgovor) => {
      //console.log(odgovor.data);
      let sporocilo = odgovor.data.length ? null : "Ne najdem nobenega dogodka :(";
      instructionsEventList(req, res, odgovor.data, sporocilo);
    })
    .catch((err) => {
      instructionsEventList(req, res, [], "Napaka API-ja pri iskanju dogodkov.");
      console.error(err);
    });
};

//RENDER instructions event list
const instructionsEventList = (req, res, instrukcijeDogodki, sporocilo) => {
  //console.log(instrukcijeDogodki);
  res.render('instructions-events-list', {
    instrukcijeDogodki: instrukcijeDogodki,
    sporocilo: sporocilo
  });
};

//GET instructions event page with id - MAIN FUNCTION
const instructionsEvent = (req, res) => {
  getInstructionsEvent(req, res, (req, res, vsebina) => {
    renderInstructionsEvent(req, res, vsebina);
  });
  //var instruktor = getInstructor(req, res);
};

//GET instructions event page with id - API COMMUNICATION
const getInstructionsEvent = (req, res, povratniKlic) => {
  axios
    .get('http://localhost:3000/api/instrukcije-dogodki/dogodek/' + req.params.idDogodka)
    .then((odgovor) => {
      povratniKlic(req, res, odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

//RENDER instructions event page with id
const renderInstructionsEvent = (req, res, dogodek) => {
  res.render('instructions-event', {
    naziv: dogodek.naziv,
    opis: dogodek.opis,
    cena: dogodek.cena,
    datum: dogodek.datum,
    steviloProstihMest: dogodek.steviloProstihMest
  });
};

//GET instructor data (NOT WORKING YET)
const getInstructor = (req, res) => {
  axios
    .get()
    .then((odgovor) => {
      return odgovor;
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

//GET instructions event new post page
const instructionsEventNew = (req, res) => {
  res.render('instructions-event-new');
};

//POST a new instructions event
const instructionsEventNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum || !req.body.steviloProstihMest) {
    console.log("izpolni vsa polja");
  } else {
    //console.log("posting to: " + apiParametri.streznik);
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
      //console.log("posted");
      //console.log(dogodek.data);
      res.redirect('/instrukcije-dogodki');

    }).catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
  }
};

//DELETE an instructions event page by id
const instructionsEventDelete = (req, res) => {
  //console.log("Using axios to access local database...");
  axios
    .delete('http://localhost:3000/api/instrukcije-dogodki/' + req.params.idDogodka)
    .then((dogodek) => {
      console.log("Deleted the following event:");
      console.log(dogodek.data);
      res.redirect('/instrukcije-dogodki');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

/* OBSOLETE
const instructionsUser = (req, res) => {
  res.render('instructions-event-edit', { title: "Uredi" });
};
*/

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


//EXPORT functions
module.exports = {
  instructorsList,
  eventList,
  instructionsEvent,
  instructionsEventNew,
  instructionsEventNewPost,
  instructionsEventDelete
  //instructionsUser
};