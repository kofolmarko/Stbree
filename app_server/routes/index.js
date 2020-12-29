//ROUTER import
var express = require('express');
var router = express.Router();

//Controllers constants to access functions
const ctrlLanding = require('../controllers/landing');
const ctrlMain = require('../controllers/main');
const ctrlProfile = require('../controllers/profile');

/* GET home page. */
router.get('/', ctrlLanding.landing);

/* GET dashboard */
router.get('/my', ctrlMain.dashboard);

/* GET view-only profile page */
//router.get('/profil/ogled', ctrlMain.viewProfile);

/* GET chat page kontakti */
router.get('/sporocanje', ctrlMain.chat);

/* GET dolocen kontakt */
router.get('/sporocanje/:idPrejemnika', ctrlMain.pridobiKontakt);

/* POST sporocilo */
router.post('/sporocanje/:idPrejemnika', ctrlMain.shraniSporocilo);

/* GET info for user profile page */
router.get('/profil/:idUporabnika', ctrlProfile.renderProfile);
//router.get('/profil/:my', ctrlProfile.renderProfileNav);

//GET redirect to my profile page
router.get('/profil-my', ctrlProfile.redirectMyProfile);

/* GET new info for user profile page */
router.put('/profil/:idUporabnika', ctrlProfile.updateProfile); 

/*DELETE user*/
router.delete('/profil/:idUporabnika', ctrlProfile.deleteProfile); 

/* GET baza*/
router.get('/db', ctrlMain.db);
router.get('/db/delete', ctrlMain.bazaIzbrisi);
router.get('/db/post', ctrlMain.bazaNapolni);

//ROUTER export
module.exports = router;