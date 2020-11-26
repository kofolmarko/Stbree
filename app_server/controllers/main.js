/* GET dashboard */
const dashboard = (req, res) => {
  res.render('dashboard', { title: "Nadzorna plošča" });
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
  res.render('chat', { 
    title: "Sporočila",
    contacts: [{
      ime: "Steve Gates",
      slika: "/assets/pics/instruktor1.jpg"
    },
    {
      ime: "Billa Jobs",
      slika: "/assets/pics/instruktor3.jpg"
    },
    {
      ime: "Mark Zuki",
      slika: "/assets/pics/instruktor1.jpg"
    }
    ],

    contactChosen:{ 
      sporocila: [
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 1",
          cas: "16:20 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 2",
          cas: "16:23 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 3",
          cas: "16:26 | Nov 15"
        }
      ],
      datoteke: [
        {imeDatoteke: "program.c"},
        {imeDatoteke: "slika.jpg"},
        {imeDatoteke: "seminarska.ppt"},
      ]
    },
    mojaSporocila: [
      {
        ime: "Rozi Furst",
        slika: "/assets/pics/instruktor2.jpg",
        besedilo: "to sem poslal jaz 1",
        cas: "16:21 | Nov 15"
      },
      {
        ime: "Rozi Furst",
        slika: "/assets/pics/instruktor2.jpg",
        besedilo: "to sem poslal jaz 2",
        cas: "16:24 | Nov 15"
      },
      {
        ime: "Rozi Furst",
        slika: "/assets/pics/instruktor2.jpg",
        besedilo: "to sem poslal jaz 3",
        cas: "16:26 | Nov 15"
      }
    ]

  });
};

module.exports = {
  dashboard,
  userProfile,
  viewProfile,
  chat
};