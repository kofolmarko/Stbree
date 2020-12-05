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

const loginID = require('./signing').loginID;
console.log("some juicy id: " + loginID);
const renderProfileNav = (req, res) => {
  axios.get("http://localhost:3000/api/uporabnik/" + loginID.val)
    .then(({ data }, err) => {
      axios.get('http://localhost:3000/api/instrukcije-dogodki')
        .then((dogodki) => {
          console.log("then po dogodkih");
          axios.get('http://localhost:3000/api/ponudba-del')
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


const renderProfile = (req, res) => {
  console.log(req.params.idUporabnika);
  axios.get("http://localhost:3000/api/uporabnik/" + req.params.idUporabnika)
    .then(({ data }, err) => {
      axios.get('http://localhost:3000/api/instrukcije-dogodki')
        .then((dogodki) => {
          console.log("then po dogodkih");
          axios.get('http://localhost:3000/api/ponudba-del')
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


module.exports = {
  renderProfile,
  renderProfileNav
};