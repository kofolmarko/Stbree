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

/*GET edit user profile page*/
const userProfileEdit = (req, res) => {
    res.render('profile-user-edit', {
        title: 'Uredi profil',
        ime: 'Lara',
        priimek: 'Jontes',
        email: 'lara.jontes@gmail.com',
        geslo: 'lara1234',
        statusInstruktorja: true,
        datumVpisa: {
            $date: '2020-11-07T00:00:00Z'
        },
        dodatniPodatki: {
            opis: 'Sem študentka drugega letnika FEja in rada programiram!',
            telefonskaStevilka: '041 442 224',
            ocena: 5
        }
    });
};

module.exports = {
    userProfile,
    userProfileEdit
};