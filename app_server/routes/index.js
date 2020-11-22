var express = require('express');
var router = express.Router();

const ctrlLanding = require('../controllers/landing');
const ctrlSigning = require('../controllers/signing');
const ctrlMain = require('../controllers/main');
const ctrlJob = require('../controllers/job');
const ctrlInstructions = require('../controllers/instructions');

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
router.get('/instrukcije-dogodki', ctrlInstructions.eventList);
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstructions.instructionsEvent);
//router.get('/instrukcije-dogodki/dodaj', ctrlInstructions.instructionsEventNew);
router.get('/instrukcije-dogodki/dogodek/uredi', ctrlInstructions.instructionsUser);

/* POST instructions event */
router
    .route('/instrukcije-dogodki/dodaj')
    .get(ctrlInstructions.instructionsEventNew)
    .post(ctrlInstructions.instructionsEventNewPost);

/* DELETE instructions event */
router
    .route('/instrukcije-dogodki/dogodek/:idDogodka')
    .get(ctrlInstructions.instructionsEvent)
    .delete(ctrlInstructions.instructionsEventDelete);

/* GET user profile page */
router.get('/profil/uporabnik', ctrlMain.userProfile);

/* GET view-only profile page */
router.get('/profil/ogled', ctrlMain.viewProfile);

/* GET chat page */
router.get('/sporocanje', ctrlMain.chat);

module.exports = router;