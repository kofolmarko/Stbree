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

//GET instructors list
const instructorsList = (req, res) => {
  axios
    .get('http://localhost:3000/api/instruktorji')
    .then((odgovor) => {
      //console.log(odgovor.data);
      let sporocilo = odgovor.data.length ? null : "Ne najdem nobenega inštruktorja :(";
      renderInstructorsList(req, res, odgovor.data, sporocilo);
    })
    .catch((err) => {
      renderInstructorsList(req, res, [], "Napaka API-ja pri iskanju inštruktorjev.");
      console.error(err);
    });
};

//RENDER instructors
const renderInstructorsList = (req, res, instruktorji, sporocilo) => {
  console.log("rendering....");
  console.log(instruktorji);
  res.render('instructors-list', {
    instruktorji: instruktorji,
    sporocilo: sporocilo
  });
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
  console.log("RENDERING..." + instrukcijeDogodki);
  res.render('instructions-events-list', {
    instrukcijeDogodki: instrukcijeDogodki,
    sporocilo: sporocilo
  });
};

//GET instructions event page with id - MAIN FUNCTION
const instructionsEvent = (req, res) => {
  getInstructionsEvent(req, res, (req, res, event) => {
    getInstructor(req, res, event, (req, res, instructor) => {
      renderInstructionsEvent(req, res, event, instructor);
      //console.log("Tukaj Dogodek -------->  " + event);
      //console.log("Tukaj Inštruktor -------->  " + instructor);
    });
  });
};

//GET instructions event page with id - API COMMUNICATION
const getInstructionsEvent = async (req, res, povratniKlic) => {
  const result = await axios
    .get('http://localhost:3000/api/instrukcije-dogodki/dogodek/' + req.params.idDogodka)
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });

  if (result) {
    console.log(result.data);
    povratniKlic(req, res, result.data);
  } else {
    prikaziNapako(req, res, result);
  }
};

//POST filter
const filter = (req, res) => {
  console.log("filtriram dogodke v app server");
  //console.log(req.body);
  console.log(req.params.parameter);
  axios
  .get('http://localhost:3000/api/instrukcije-dogodki/' + req.params.parameter)
  .then((dogodki) => {
    console.log("filtering by " + req.params.parameter);
    //console.log(dogodki.data);

    
    if (req.params.parameter.substring(0,3) == "REV") {
      dogodki.data = dogodki.data.reverse();
    }
    

    console.log(dogodki.data);

    //instructionsEventList(req, res, dogodki.data);
    //console.log(res);
    
    res.render('instructions-events-list', {
      instrukcijeDogodki: dogodki.data
    });

    //res.redirect('/instrukcije-dogodki/' + req.params.parameter);

    //sortDates(dogodki);

    /*
    var datumi = [];
    for (i = 0; i < dogodki.data.length; i++) {
      console.log(i);
      console.log(dogodki.data[i]);
    }
    console.log("Tabela datumov: ", datumi);
    */
  })
  .catch((napaka) => {
    prikaziNapako(req, res, napaka);
  });
};

//RENDER instructions event page with id
const renderInstructionsEvent = (req, res, dogodek, instruktor) => {
  var loginID = require('./signing').loginID.val;
  gettingInsID = { idInstruktorja: loginID };

  getInstructor(req, res, gettingInsID, (req, res, loggedInUser) => {

  console.log("rendering");
  console.log(dogodek);
  console.log(instruktor);
  console.log(loggedInUser);
  var isSignedUp = false;
  for(i = 0; i < loggedInUser.dogodki.length; i++) {
    if(dogodek._id == loggedInUser.dogodki[i]._id) {
      console.log("found a match");
      isSignedUp = true;
      break;
    }
  }
  var isAdmin = false;
  //var loginID = require('./signing').loginID.val;
  if (loginID == dogodek.idInstruktorja)
    isAdmin = true;
  // console.log(isAdmin);
  // console.log(loginID);
  // console.log(dogodek.idInstruktorja);
  res.render('instructions-event', {
    naziv: dogodek.naziv,
    opis: dogodek.opis,
    cena: dogodek.cena,
    datum: dogodek.datum,
    ura: dogodek.ura,
    steviloProstihMest: dogodek.steviloProstihMest,
    ime: instruktor.ime + " " + instruktor.priimek,
    admin: isAdmin,
    prijavljen: isSignedUp
  });
});
};

//GET instructor data
const getInstructor = async (req, res, dogodek, povratniKlic) => {
  console.log("Getting the instructor for the event");
  console.log(dogodek);
  const result = await axios.get('http://localhost:3000/api/uporabnik/' + dogodek.idInstruktorja);
  console.log(result.data);
  povratniKlic(req, res, result.data);
};

//GET instructions event new post page
const instructionsEventNew = (req, res, sporocilo) => {
  res.render('instructions-event-new', {sporocilo: sporocilo});
};

//POST a new instructions event
const instructionsEventNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum || !req.body.ura || !req.body.steviloProstihMest) {
    console.log("izpolni vsa polja");
    instructionsEventNew(req, res, "Prosim izpolnite vsa polja.");
  } else {
    //console.log("posting to: " + apiParametri.streznik);
    const idPrijavljenega = require('./signing').loginID.val;
    console.log("idPrijavljenega: " + idPrijavljenega);
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/instrukcije-dogodki',
      data: {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        ura: req.body.ura,
        steviloProstihMest: req.body.steviloProstihMest,
        idInstruktorja: idPrijavljenega
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

//PUT edit instructions event
const instructionsEventEdit = (req, res) => {
  console.log("Inside controllers on server-side!");
  console.log(req.body);
  axios
    .put('http://localhost:3000/api/instrukcije-dogodki/dogodek/' + req.params.idDogodka,
      {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        ura: req.body.ura,
        steviloProstihMest: req.body.steviloProstihMest,
        idInstruktorja: require('./signing').loginID.val
      }
    )
    .then((dogodek) => {
      console.log(dogodek);
      res.status(200).json(dogodek);
    })
    .catch((napaka) => {
      console.log(napaka);
      prikaziNapako(req, res, napaka);
    });
};

//DELETE an instructions event page by id
const instructionsEventDelete = (req, res) => {
  //console.log("Using axios to access local database...");
  axios
    .delete('http://localhost:3000/api/instrukcije-dogodki/dogodek/' + req.params.idDogodka)
    .then((dogodek) => {
      console.log("Deleted the following event:");
      console.log(dogodek.data);

      res.status(200).json(dogodek);
      //res.json({ redirect: '/instrukcije-dogodki' });
      //Set HTTP method to GET
      //res.method = 'GET';
      //res.redirect('/instrukcije-dogodki');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const instructionsEventSignup = (req, res) => {
  var loginID = require('./signing').loginID.val;
  console.log(loginID);
  console.log(req.params);
  axios.put('http://localhost:3000/api/uporabniki/' + loginID + "/dogodek/" + req.params.idDogodka)
    .then((uporabnik) => {
      console.log("Nazaj na serverju: " + uporabnik);
      //console.log("List od user jobs: " + uporabnik.dela);
      
      res.redirect('/instrukcije-dogodki');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const instructionsEventLeave = (req, res) => {
  var loginID = require('./signing').loginID.val;
  console.log(loginID);
  console.log(req.params);
  axios.put('http://localhost:3000/api/uporabniki/' + loginID + "/dogodek/odjava/" + req.params.idDogodka)
    .then((uporabnik) => {
      console.log("Nazaj na serverju: " + uporabnik);
      //console.log("List od user jobs: " + uporabnik.dela);
      
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
  let vsebina = "Nekaj ne deluje pravilno";
  if (!napaka) {
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
  instructionsEventEdit,
  instructionsEventDelete,
  filter,
  instructionsEventSignup,
  instructionsEventLeave,
  getInstructor
  //instructionsUser
};