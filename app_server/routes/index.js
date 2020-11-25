var express = require('express');
var router = express.Router();

var ctrlLanding = require('../controllers/landing');
var ctrlSigning = require('../controllers/signing');
var ctrlMain = require('../controllers/main');
var ctrlJob = require('../controllers/job');
var ctrlInstructions = require('../controllers/instructions');
var ctrlUserProfile = require('../controllers/userProfile');

/* GET home page. */
router.get('/', ctrlLanding.landing);

/* GET signin page */
router.get('/prijava', ctrlSigning.signin);

/* GET signup page */
router.get('/registracija', ctrlSigning.signup);

/* GET dashboard */
router.get('/my', ctrlMain.dashboard);

/* GET job related pages */
router.get('/ponudba-del', ctrlJob.jobsList);
router.get('/ponudba-del/delo', ctrlJob.job);
router.get('/ponudba-del/dodaj', ctrlJob.jobNew);
router.get('/ponudba-del/delo/uredi', ctrlJob.jobUser);

/* GET instructions related pages */
router.get('/instruktorji', ctrlInstructions.instructorsList);
router.get('/instrukcije-dogodki', ctrlInstructions.instructionsEventList);
router.get('/instrukcije-dogodki/dogodek', ctrlInstructions.instructionsEvent);
router.get('/instrukcije-dogodki/dodaj', ctrlInstructions.instructionsEventNew);
router.get('/instrukcije-dogodki/dogodek/uredi', ctrlInstructions.instructionsUser);

/* GET user profile page */
router.get('/profil/uporabnik', ctrlUserProfile.userProfile);
router.get('/profil/uporabnik/uredi', ctrlUserProfile.userProfileEdit);
//router.get('/profil/uporabnik/uredi-podatke', ctrlUserProfile.userProfileInfoUser);

/* GET view-only profile page */
router.get('/profil/ogled', ctrlMain.viewProfile);

/* GET chat page */
router.get('/sporocanje', ctrlMain.chat);

module.exports = router;