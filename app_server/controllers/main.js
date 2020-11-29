/* GET dashboard */
const dashboard = (req, res) => {
  let uporabnikID = require('./signing').loginID.val;
  console.log(uporabnikID);
  axios
    .get('http://localhost:3000/api/uporabnik/' + uporabnikID)
    .then((uporabnik) => {
      console.log(uporabnik);
    })
    .catch((napaka) => {
      console.log(napaka);
    });

  /*
    let arr = [];
    arr.push(dogodek.naziv)
    let idDogodka = uporabnik.data.dogodki.idDogodka;
  axios
    .get()
  */

  res.render('dashboard', { 
    dogodki: uporabnik.data.dogodki,
    dela: uporabnik.data.dela
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