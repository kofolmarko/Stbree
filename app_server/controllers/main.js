//API connection
const axios = require('axios');
const { uporabniki } = require('../../app_api/controllers/users');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:' + (process.env.PORT || 3000)
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}

/* GET dashboard */
const dashboard = async (req, res) => {
  let uporabnikID = require('./signing').loginID.val;
  console.log(uporabnikID);
  let loggedInUser;
  axios
    .get('http://localhost:3000/api/uporabnik/' + uporabnikID)
    .then((uporabnik) => {
      //console.log(uporabnik);
      loggedInUser = uporabnik.data;
      console.log(loggedInUser);
    })
    .catch((napaka) => {
      console.log(napaka);
    });

  axios
    .get('http://localhost:3000/api/instruktorji')
    .then((uporabniki) => {


      axios
        .get('http://localhost:3000/api/instrukcije-dogodki')
        .then((dogodki) => {


          axios
            .get('http://localhost:3000/api/ponudba-del')
            .then((dela) => {
              console.log("NAJDEM UPORABNIKE ======> " + uporabniki.data);
              console.log("NAJDEM DOGODKE =======> " + dogodki.data);

              for (i = uporabniki.data.length; i < 3; i++) {
                uporabniki.data.unshift({ ime: "Ne najdem ničesar :(", email: "Ni zanimivih inštruktorjev..." });
              }

              for (i = dogodki.data.length; i < 3; i++) {
                dogodki.data.unshift({ ime: "Ne najdem ničesar :(", opis: "Ni novih dogodkov..." });
              }

              for (i = dela.data.length; i < 3; i++) {
                dela.data.unshift({ ime: "Ne najdem ničesar :(", opis: "Ni novih ponudb..." });
              }

              var loginName = require('./signing').loginName.val;
              console.log(loginName);

              res.render('dashboard', {
                f1: { ime: uporabniki.data[uporabniki.data.length - 1].ime, predmeti: uporabniki.data[uporabniki.data.length - 1].email, u1: uporabniki.data[uporabniki.data.length - 1] },
                f2: { ime: uporabniki.data[uporabniki.data.length - 2].ime, predmeti: uporabniki.data[uporabniki.data.length - 2].email, u2: uporabniki.data[uporabniki.data.length - 2] },
                f3: { ime: uporabniki.data[uporabniki.data.length - 3].ime, predmeti: uporabniki.data[uporabniki.data.length - 3].email, u3: uporabniki.data[uporabniki.data.length - 3] },

                f4: { ime: dogodki.data[dogodki.data.length - 1].naziv, predmeti: dogodki.data[dogodki.data.length - 1].opis, d1: dogodki.data[dogodki.data.length - 1] },
                f5: { ime: dogodki.data[dogodki.data.length - 2].naziv, predmeti: dogodki.data[dogodki.data.length - 2].opis, d2: dogodki.data[dogodki.data.length - 2] },
                f6: { ime: dogodki.data[dogodki.data.length - 3].naziv, predmeti: dogodki.data[dogodki.data.length - 3].opis, d3: dogodki.data[dogodki.data.length - 3] },

                f7: { ime: dela.data[dela.data.length - 1].naziv, predmeti: dela.data[dela.data.length - 1].opis, d1: dela.data[dela.data.length - 1] },
                f8: { ime: dela.data[dela.data.length - 2].naziv, predmeti: dela.data[dela.data.length - 2].opis, d2: dela.data[dela.data.length - 2] },
                f9: { ime: dela.data[dela.data.length - 3].naziv, predmeti: dela.data[dela.data.length - 3].opis, d3: dela.data[dela.data.length - 3] },

                dogodki: loggedInUser.dogodki,
                imePrijavljenega: loginName
                //dela: uporabnik.data.dela
              });

            })
            .catch((err) => {
              console.log("err in dela search " + err);
            });


        })
        .catch((err) => {
          console.log("err in dogodki search " + err);
        });



    });



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
  res.render('chat', { title: "Sporočila" });
};

module.exports = {
  dashboard,
  userProfile,
  viewProfile,
  chat
};