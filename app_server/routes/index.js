//ROUTER import
var express = require('express');
var router = express.Router();

//Controllers constants to access functions
const ctrlLanding = require('../controllers/landing');
const ctrlMain = require('../controllers/main');
const ctrlJob = require('../controllers/job');


/* GET home page. */
router.get('/', ctrlLanding.landing);

/* GET dashboard */
router.get('/my', ctrlMain.dashboard);

/* GET job related pages */
router.get('/ponudba-del', ctrlJob.jobsList);
router.get('/ponudba-del/delo', ctrlJob.job);
router.get('/ponudba-del/dodaj', ctrlJob.jobNew);
router.get('/ponudba-del/delo/uredi', ctrlJob.jobUser);

/* GET user profile page */
router.get('/profil/uporabnik', ctrlMain.userProfile);

/* GET view-only profile page */
router.get('/profil/ogled', ctrlMain.viewProfile);

/* GET chat page */
router.get('/sporocanje', ctrlMain.chat);


//ROUTER export
module.exports = router;