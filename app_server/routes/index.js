//ROUTER import
var express = require('express');
var router = express.Router();

//Controllers constants to access functions
const ctrlLanding = require('../controllers/landing');
const ctrlMain = require('../controllers/main');
const ctrlProfile = require('../controllers/profile')

/* GET home page. */
router.get('/', ctrlLanding.landing);

/* GET dashboard */
router.get('/my', ctrlMain.dashboard);

/* GET view-only profile page */
router.get('/profil/ogled', ctrlMain.viewProfile);

/* GET chat page */
router.get('/sporocanje/:idUserja', ctrlMain.chat);

/* POST sporocilo */
router
  .route('/sporocanje/:idUserja')
  .post(ctrlMain.shraniSporocilo);


/* GET user profile page */
router.get('/profil/:idUporabnika', ctrlProfile.renderProfile);

/* GET user profile page */
router.put('/profil/:idUporabnika', ctrlProfile.renderProfile); 

router.get('/db', ctrlMain.db);

router.delete('/db', ctrlMain.bazaIzbrisi);

router.post('/db', ctrlMain.bazaNapolni)



//ROUTER export
module.exports = router;