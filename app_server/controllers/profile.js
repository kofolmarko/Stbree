//API connection
const axios = require('axios');
const { prikaziNapako } = require('./job');

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
  axios.get(apiParametri.streznik + "/api/uporabnik/" + req.params.idUporabnika)
    .then(({ data }, err) => {
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
              const profileDetails = {
                ime: data.ime,
                priimek: data.priimek,
                opis: data.opis, //ne
                telefonskaStevilka: data.telefonskaStevilka, //ne
                ocena: data.ocena, //ne
                datumVpisa: data.datumVpisa,
                email: data.email,
                statusInstruktorja: data.statusInstruktorja, //ne
                dogodki: data.dogodki, //
                dela: data.dela,//
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

/*DELETE user*/
const deleteProfile = (res, req) => {
  console.log('use axios to delete user');
  axios
    .delete(apiParametri + '/api/uporabnik/' + req.params.idUporabnika)
    .then((profil) => {
      console.log("Deleted the following profile" + profil.data);
      res.status(204).json(profil);
      res.redirect('/');
    })
    .catch((napaka) => {
      prikaziNapako(req, res, napaka);
    });
};


module.exports = {
  renderProfile,
  renderProfileNav,
  redirectMyProfile,
  deleteProfile,
};