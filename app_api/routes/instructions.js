//ROUTER import
const express = require('express');
const router = express.Router();


//Controller constant to access functions
const ctrlInstrukcije = require('../controllers/instructions');


//GET instructions events list
router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);

//POST new instructions event
router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);

//GET instructions event by id
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);

//UPDATE instructions event by id (CURRENTLY NOT IN USE)
router.put('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPosodobi);

//DELETE instructions event by id
router.delete('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekIzbrisi);


//ROUTER export
module.exports = router;