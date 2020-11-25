/* GET dashboard */
const dashboard = (req, res) => {
  res.render('dashboard', { title: "Nadzorna plošča" });
};

/* GET profile for viewers */
const viewProfile = (req, res) => {
  res.render('profile-view', {
    title: 'Profil',
    glavniPodatki: {
      ime: 'Janez',
      priimek: "Novak",
      email: "janez.novak@gmail.com",
      geslo: "password123",
      statusInstruktorja: false
    },
    datumVpisa: {
      $date: "2019-11-07T00:00:00Z"
    },
    dodatniPodatki: {
      slika: '/assets/pics/instruktor1.jpg',
      opis: "Sem Janez in obožujem številke!",
      telefonskaStevilka: "041 532 234",
      ocena: 4
    },
    dela: [{
      stevilka: '1',
      ime: 'Linearna Algebra',
      $date: '2020-10-07T00:00:00Z'
    },{
      stevilka: '2',
      ime: 'Osnovna Matematična Analiza',
      $date: '2020-11-07T00:00:00Z'
    }],
    instrukcije: [{
      stevilka: '1',
      ime: 'Programiranje 1',
      $date: '2020-11-07T00:00:00Z'
    }, {
      stevilka: '2',
      ime: 'Programiranje 2',
      $date: '2020-11-07T00:00:00Z'
    }]
  });
};

/* GET chat page */
const chat = (req, res) => {
  res.render('chat', { title: "Sporočila" });
};

module.exports = {
  dashboard,
  viewProfile,
  chat
};