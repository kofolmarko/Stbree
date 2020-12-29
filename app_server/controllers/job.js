/* API CONNECTION */
const axios = require('axios');

/* API local parameters */
var apiParametri = {
  streznik: 'http://localhost:3000'
};

/* API Mongo atlas parameters */
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}

/* GET jobs list */
const jobList = (req, res) => {
  axios
    .get(apiParametri.streznik + '/api/ponudba-del')
    .then((odgovor) => {
      let sporocilo = odgovor.data.length ? null : "Ne najdem nobenega dela :(";
      jobsList(req, res, odgovor.data, sporocilo);
    })
    .catch((err) => {
      jobsList(req, res, [], "Napaka API-ja pri iskanju del.");
      console.error(err);
    });
};

/* Render job list */
const jobsList = (req, res, dela, sporocilo) => {
  console.log(dela);
  res.render('jobs-list', {
    dela: dela,
    sporocilo: sporocilo
  });
};

/* GET job page by ID */
const job = (req, res) => {
  if (require('./signing').loginStatus.val == false) {
    res.redirect('/prijava');
  } else {
    getJob(req, res, (req, res, event) => {
      getPonudnik(req, res, event, (req, res, ponudnik) => {
        renderJob(req, res, event, ponudnik);
      });
    });
  }
};

/* GET job page by id - API COMMUNICATION */
const getJob = async (req, res, povratniKlic) => {
  const result = await axios
    .get(apiParametri.streznik + '/api/ponudba-del/delo/' + req.params.idDela)
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

/* Render job page by ID */
const renderJob = (req, res, delo, ponudnik) => {
  var isAdmin = false;
  var loginID = require('./signing').loginID.val;
  if (loginID == delo.idPonudnika) {
    isAdmin = true;
  }
  gettingInsID = { idInstruktorja: loginID };
  require('./instructions').getInstructor(req, res, gettingInsID, (req, res, loggedInUser) => {
    console.log(delo);
    var isSignedUp = false;
    for (i = 0; i < loggedInUser.dela.length; i++) {
      if (delo._id == loggedInUser.dela[i]._id) {
        isSignedUp = true;
        break;
      }
    }
    res.render('job', {
      naziv: delo.naziv,
      opis: delo.opis,
      cena: delo.cena,
      datum: delo.datum,
      ime: ponudnik.ime + ' ' + ponudnik.priimek,
      opisPonudnik: ponudnik.opis,
      admin: isAdmin,
      prijavljen: isSignedUp,
      zasedeno: delo.zasedeno
    });
  });
};

/* GET ponudnik data */
const getPonudnik = async (req, res, delo, povratniKlic) => {
  const result = await axios.get(apiParametri.streznik + '/api/uporabnik/' + delo.idPonudnika);
  console.log(result.data);
  povratniKlic(req, res, result.data);
};

/* GET new job page */
const jobNew = (req, res) => {
  res.render('job-new');
};

/* POST new job */
const jobNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum) {
    console.log("izpolni vsa polja");
  } else {
    const idPrijavljenega = require('./signing').loginID.val;
    axios({
      method: "post",
      url: apiParametri.streznik + "/api/ponudba-del",
      data: {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        idPonudnika: idPrijavljenega
      }
    }).then((delo) => {
      console.log("Novo delo '" + req.body.naziv + "' je bilo dodano!");
      res.redirect('/ponudba-del');
    }).catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
  }
};

/* PUT job page (edit) */
const jobEdit = (req, res) => {
  console.log(req.body);
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum) {
    console.log("izpolni vsa polja");
  } else {
    axios
    .put(apiParametri.streznik + '/api/ponudba-del/delo/' + req.params.idDela,
      {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        idPonudnika: require('./signing').loginID.val
      }
    )
    .then((delo) => {
      console.log(delo);
      res.status(200).json(delo);
    })
    .catch((napaka) => {
      console.log(napaka);
      prikaziNapako(req, res, napaka);
    });
  }
};

/* DELETE job page*/
const jobDelete = (req, res) => {
  axios
    .delete(apiParametri.streznik + '/api/ponudba-del/delo/' + req.params.idDela)
    .then((delo) => {
      console.log("Deleted the following event:");
      console.log(delo.data);
      res.status(200).json(delo);
      res.redirect('/ponudba-del');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};


const jobSignup = (req, res) => {
  var loginID = require('./signing').loginID.val;
  console.log(loginID);
  console.log(req.params);
  axios.put(apiParametri.streznik + '/api/uporabniki/' + loginID + "/delo/" + req.params.idDela)
    .then((uporabnik) => {
      res.redirect('/ponudba-del');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const jobLeave = (req, res) => {
  var loginID = require('./signing').loginID.val;
  console.log(loginID);
  console.log(req.params);
  axios.put(apiParametri.streznik + '/api/uporabniki/' + loginID + "/delo/odjava/" + req.params.idDela)
    .then((uporabnik) => {
      console.log("Nazaj na serverju: " + uporabnik);
      res.redirect('/ponudba-del');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

//POST filter
const filter = (req, res) => {
  console.log(req.params.parameter);
  axios
    .get(apiParametri.streznik + '/api/ponudba-del/' + req.params.parameter)
    .then((dela) => {
      console.log("filtering by " + req.params.parameter);
      if (req.params.parameter.substring(0, 3) == "REV") {
        dela.data = dela.data.reverse();
      }
      console.log(dela.data);
      res.render('jobs-list', {
        dela: dela.data
      });
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const prikaziNapako = (req, res, napaka) => {
  let naslov = "Nekaj je šlo narobe!";
  let vsebina = napaka.response.data["sporočilo"] ?
    napaka.response.data["sporočilo"] : (napaka.response.data["message"] ?
      napaka.response.data["message"] : "Nekaj nekje očitno ne deluje.");
  if (napaka.response.data["_message"] == "Lokacija validation failed") {
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
  jobList,
  jobsList,
  job,
  getJob,
  renderJob,
  jobNew,
  jobNewPost,
  jobEdit,
  jobDelete,
  prikaziNapako,
  jobSignup,
  jobLeave,
  filter
};