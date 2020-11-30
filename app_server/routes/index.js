//ROUTER import
var express = require('express');
var router = express.Router();

//Controllers constants to access functions
const ctrlLanding = require('../controllers/landing');
const ctrlMain = require('../controllers/main');
const ctrlJob = require('../controllers/job');
const ctrlProfile = require('../controllers/profile');


/* GET home page. */
router.get('/', ctrlLanding.landing);

/* GET dashboard */
router.get('/my', ctrlMain.dashboard);

/* GET job related pages */ /*
router.get('/ponudba-del', ctrlJob.jobsList);
router.get('/ponudba-del/delo', ctrlJob.job);
router.get('/ponudba-del/dodaj', ctrlJob.jobNew);
router.get('/ponudba-del/delo/uredi', ctrlJob.jobUser);
*/



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
router.get('/profil/:my', ctrlProfile.renderProfileNav);

/* GET user profile page */
router.put('/profil/:idUporabnika', ctrlProfile.renderProfile); 



//ROUTER export
module.exports = router;