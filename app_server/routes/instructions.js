//ROUTER import
var express = require('express');
var router = express.Router();


//Controller constant to access functions
const ctrlInstructions = require('../controllers/instructions');


//GET instructors list
router.get('/instruktorji', ctrlInstructions.instructorsList);

//GET instructions events list
router.get('/instrukcije-dogodki', ctrlInstructions.eventList);

/*OBSOLETE
router.get('/instrukcije-dogodki/dogodek/uredi', ctrlInstructions.instructionsUser);
*/

//GET instructions event info
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstructions.instructionsEvent);

//POST new instructions event
router
    .route('/instrukcije-dogodki/dodaj')
    .get(ctrlInstructions.instructionsEventNew)
    .post(ctrlInstructions.instructionsEventNewPost);

//DELETE instructions event
router.delete('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstructions.instructionsEventDelete);


//ROUTER export
module.exports = router;