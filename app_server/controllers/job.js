/* API CONNECTION */
const axios = require('axios');

var apiParametri = {
  streznik: 'http://localhost:' + (process.env.PORT || 3000)
};

if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
};

/* GET jobs list object */
const jobList = (req, res) => {
  axios
    .get('http://localhost:3000/api/ponudba-del')
    .then((odgovor) => {
      console.log(odgovor.data);
      let sporocilo = odgovor.data.length ? null : "Ne najdem nobenega dogodka :(";
      jobList(req, res, odgovor.data, sporocilo);
    })
    .catch((err) => {
      jobList(req, res, [], "Napaka API-ja pri iskanju del.");
      console.error(err);
    });
};

/* GET jobs list page */
const jobsList = (req, res, dela, sporocilo) => {
  console.log(dela);
  res.render('jobs-list', {
    dela: dela,
    sporocilo: sporocilo
  });
};

/* GET job page */
const job = (req, res) => {
  axios
    .get('http://localhost:3000/api/ponudba-del/' + req.params.idDela)
    .then((odgovor) => {
      renderDela(req, res, odgovor.data);
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

const renderDela = (req, res, dogodek) => {
  res.render('dela', {
    naziv: delo.naziv,
    opis: delo.opis,
    cena: delo.cena,
    datum: delo.datum,
  });
};

/* GET new job page */
const jobNew = (req, res) => {
  res.render('job-new', { title: "Dodaj" });
};

const jobNewPost = (req, res) => {
  if (!req.body.naziv || !req.body.opis || !req.body.cena || !req.body.datum) {
    console.log("izpolni vsa polja");
  } else {
    console.log("posting to: " + apiParametri.streznik);
    axios({
      method: "post",
      url: "http://localhost:3000/api/ponudba-del",
      data: {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
      }
    }).then((dogodek) => {
      console.log("posted");
      console.log(delo.data);
      res.redirect("/ponudba-del");
    }).catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
  }
};

/* DELETE instructions event */
const jobDelete = (req, res) => {
  axios
    .delete('http://localhost:3000/api/ponudba-del/' + idDela)
    .then((delo) => {
      console.log("Deleted the following event:");
      console.log(delo.data);
      res.redirect('/ponudba-del');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

/* GET edit job page */
const jobUser = (req, res) => {
  res.render('job-edit', { title: "Uredi" })
}

/* ERROR MESSAGE 
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
};*/

module.exports = {
  jobList,
  jobsList,
  job,
  jobNew,
  jobNewPost,
  jobDelete,
  jobUser
};