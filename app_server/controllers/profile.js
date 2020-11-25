/*GET user profile page*/
const userProfile = (req, res) => {
    res.render('profile-user', {
        title: 'Moj profil',
        glavniPodatki: {
            ime: 'Lara',
            priimek: 'Jontes',
            email: 'lara.jontes@gmail.com',
            geslo: 'lara1234',
            statusInstruktorja: true
        },
        datumVpisa: {
            $date: '2020-11-07T00:00:00Z'
        },
        dodatniPodatki: {
            slika: '/assets/pics/profile_picture.png',
            opis: 'Sem študentka drugega letnika FEja in rada programiram!',
            telefonskaStevilka: '041 442 224',
            ocena: 5
        },
        objave:[{
            stevilo: '1',
            projekt: 'Logo za projekt SP',
            $date: '2020-01-07T00:00:00Z',
        },{
            stevilo: '2',
            projekt: 'Projekt SP',
            $date: '2020-02-07T00:00:00Z',
        }],
        obvestila: [{
            stevilo: '1',
            nenavadno: 'Anže Vtičnik je spremenil datum inštrukcije - Programiranje 1: rekurzija',
            povezava: '/ponudba-del/delo',
            $date: '2020-11-07T00:00:00Z'
        }, {
            stevilo: '2',
            nenavadno: 'Dobil si novo sporočilo!',
            povezava: '/sporocanje',
            $date: '2020-10-07T00:00:00Z'
        }]
    });
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


module.exports = {
    userProfile,
    viewProfile
};