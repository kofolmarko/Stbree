//API connection
const axios = require('axios');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:3000'
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}

const loginID = require('./signing').loginID;
console.log("some juicy id: " + loginID);

const renderProfileNav = (req, res) => {
  axios.get(apiParametri.streznik + "/api/uporabnik/" + loginID.val)
    .then(({ data }, err) => {
      axios.get(apiParametri.streznik + '/api/instrukcije-dogodki')
        .then((dogodki) => {
          console.log("then po dogodkih");
          axios.get(apiParametri.streznik + '/api/ponudba-del')
            .then((dela) => {
              var objave = [];
              // console.log(dogodki.data[0]._id + dela.data + loginID.val);

              for(i = 0; i < dogodki.data.length; i++) {
                if(dogodki.data[i].idInstruktorja == loginID.val) {
                  objave.push(dogodki.data[i]);
                  console.log(objave);
                }
              }

              for(i = 0; i < dela.data.length; i++) {
                if(dela.data[i].idPonudnika == loginID.val) {
                  objave.push(dela.data[i]);
                  console.log(objave);
                }
              }

              console.log("Tukaj so vse objave uporabnika: " + objave.naziv);

              var naziviObjav = [];
              for(i = 0; i < objave.length; i++) {
                naziviObjav.push(objave[i].naziv);
              }

              console.log(naziviObjav);

              console.log(data);
              const profileDetails = {
                ime: data.ime,
                priimek: data.priimek,
                opis: data.opis,
                telefonskaStevilka: data.telefonskaStevilka,
                ocena: data.ocena,
                datumVpisa: data.datumVpisa,
                email: data.email,
                statusInstruktorja: data.statusInstruktorja,
                dogodki: data.dogodki,
                dela: data.dela,
                isAdmin: req.params.idUporabnika === loginID.val,
                naziviObjav: naziviObjav
              };
              let sporocilo = "";
              console.log("Data :" + data);
              res.render('profile', {
                profileDetails: profileDetails,
                sporocilo: sporocilo
              });
            })
            .catch();
        })
        .catch();

    })
    .catch((err) => {
      let sporocilo = "User not good";
      res.render('profile', {
        profileDetails: {

        },
        sporocilo: sporocilo
      });
    });
};

const redirectMyProfile = (req, res) => {
  var profileID = require('./signing').loginID.val;
  console.log("found profile id: " + profileID);
  res.redirect("/profil/" + profileID);
};

const renderProfile = (req, res) => {
  axios.get(apiParametri.streznik + "/api/uporabnik/" + req.params.idUporabnika) //we are sending the url we need to use, where is the data?
    .then(({ data }, err) => {//we have gotten the response from the (API) server
      axios.get(apiParametri.streznik + '/api/instrukcije-dogodki')
        .then((dogodki) => {
          console.log("then po dogodkih");
          axios.get(apiParametri.streznik + '/api/ponudba-del')
            .then((dela) => {
              var objave = [];
              //console.log(dogodki.data[0]._id + dela.data + req.params.idUporabnika);

              for(i = 0; i < dogodki.data.length; i++) {
                if(dogodki.data[i].idInstruktorja == req.params.idUporabnika) {
                  objave.push(dogodki.data[i]);
                  console.log(objave);
                }
              }

              for(i = 0; i < dela.data.length; i++) {
                if(dela.data[i].idPonudnika == req.params.idUporabnika) {
                  objave.push(dela.data[i]);
                  console.log(objave);
                }
              }

              console.log("Tukaj so vse objave uporabnika: " + objave.naziv);

              var naziviObjav = [];
              for(i = 0; i < objave.length; i++) {
                naziviObjav.push(objave[i].naziv);
              }

              console.log(naziviObjav);

              console.log(data);
              const profileDetails = {//we can map it in order to show it
                ime: data.ime,
                priimek: data.priimek,
                opis: data.opis, //ne
                telefonskaStevilka: data.telefonskaStevilka, //ne
                ocena: data.ocena, //ne
                datumVpisa: data.datumVpisa,
                email: data.email,
                statusInstruktorja: data.statusInstruktorja, //ne
                dogodki: data.dogodki, //
                dela: data.dela,//you can also take the url of the logged in person:)
                isAdmin: req.params.idUporabnika === loginID.val,
                naziviObjav: naziviObjav //
              };
              let sporocilo = "";
              console.log("Data :" + data);
              res.render('profile', {
                profileDetails: profileDetails,
                sporocilo: sporocilo
              });
            })
            .catch((err) => {
              let sporocilo = "Problem with jobs";
              console.log(err);
              res.render('profile', {
                profileDetails: {},
                sporocilo: sporocilo
              });
            });
        })
        .catch((err) => {
          let sporocilo = "Problem with instructions";
          res.render('profile', {
            profileDetails: {},
            sporocilo: sporocilo
          });
        });

    })
    .catch((err) => {
      let sporocilo = "User not good";
      res.render('profile', {
        profileDetails: {},
        sporocilo: sporocilo
      });
    });
};

const updateProfile = (req, res) => {
  console.log('Use Axios to perform PUT for user');
  console.log(req.body.email);
  console.log(req.body.ocena);
  if (req.body.email != undefined) {
    axios
    .put(apiParametri.streznik + '/api/uporabnik/' + req.params.idUporabnika, 
    {
      email: req.body.email,
      opis: req.body.opis,
      telefonskaStevilka: req.body.telefonskaStevilka,
      statusInstruktorja: req.body.statusInstruktorja
    })
    .then((profil) => { //you can do it without the additional parenthasies
      //console.log(profil);
      res.status(200).json(profil);
    })
    .catch((napaka) => {
      console.log("Nasa greska meska: " + napaka);
      prikaziNapako(req, res, napaka);
    });
  } else if (req.body.ocena == undefined){
    axios
    .put(apiParametri.streznik + '/api/uporabnik/geslo/' + req.params.idUporabnika, 
    {
      geslo: req.body.geslo
    })
    .then((profil) => { 
      res.status(200).json(profil);
    })
    .catch((napaka) => {
      console.log("Nasa greska meska: " + napaka);
      prikaziNapako(req, res, napaka);
    });
  } else {
    axios
    .put(apiParametri.streznik + '/api/uporabnik/ocena/' + req.params.idUporabnika, 
    {
      ocena: req.body.ocena
    })
    .then((profil) => { 
      res.status(200).json(profil);
    })
    .catch((napaka) => {
      console.log("Nasa greska meska: " + napaka);
      prikaziNapako(req, res, napaka);
    });
  } 
};


//IMPORT navbar switcher
const navbarToggle = require('../../public/javascripts/navbar-toggle');

/*DELETE user*/
const deleteProfile = (req, res) => { //you can handle these so that you use an async function, and await keyword which makes sure we wait till the first promise
  console.log('use axios to delete user');//is handled to continue on :)
  console.log(req.params);
  axios
    .delete(apiParametri.streznik + '/api/uporabnik/' + req.params.idUporabnika) //we are sending the url we need to use, where is the data?
    .then((profil) => { //we have gotten the response from the (API) server
      console.log("Deleted the following profile" + profil.data); //we can map it in order to show it, why tf profil.data exactly?
      navbarToggle(false);
      res.status(200).json(profil);
      res.redirect('/');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};

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


module.exports = {

  renderProfile,
  updateProfile,
  renderProfileNav,
  redirectMyProfile,
  deleteProfile,
};