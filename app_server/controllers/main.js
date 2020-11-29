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
          console.log("NAJDEM UPORABNIKE ======> " + uporabniki.data);
          console.log("NAJDEM DOGODKE =======> " + dogodki.data);

          for (i = uporabniki.data.length; i < 3; i++) {
            uporabniki.data.unshift({ ime: "Ne najdem ničesar :(", email: "Ni zanimivih inštruktorjev..." });
          }

          for (i = dogodki.data.length; i < 3; i++) {
            dogodki.data.unshift({ ime: "Ne najdem ničesar :(", opis: "Ni novih dogodkov..." });
          }

          res.render('dashboard', {
            f1: { ime: uporabniki.data[uporabniki.data.length - 1].ime, predmeti: uporabniki.data[uporabniki.data.length - 1].email },
            f2: { ime: uporabniki.data[uporabniki.data.length - 2].ime, predmeti: uporabniki.data[uporabniki.data.length - 2].email },
            f3: { ime: uporabniki.data[uporabniki.data.length - 3].ime, predmeti: uporabniki.data[uporabniki.data.length - 3].email },

            f4: { ime: dogodki.data[dogodki.data.length - 1].naziv, predmeti: dogodki.data[dogodki.data.length - 1].opis },
            f5: { ime: dogodki.data[dogodki.data.length - 2].naziv, predmeti: dogodki.data[dogodki.data.length - 2].opis },
            f6: { ime: dogodki.data[dogodki.data.length - 3].naziv, predmeti: dogodki.data[dogodki.data.length - 3].opis },

            dogodki: loggedInUser.dogodki
            //dela: uporabnik.data.dela
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