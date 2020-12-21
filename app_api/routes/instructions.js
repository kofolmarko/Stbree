//ROUTER import
const express = require('express');
const router = express.Router();

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

//Controller constant to access functions
const ctrlInstrukcije = require('../controllers/instructions');

//GET instructors list
router.get('/instruktorji', ctrlInstrukcije.instruktorji);

//GET instructions events list
router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);

//GET ordered by params
router.get('/instrukcije-dogodki/:parameter', ctrlInstrukcije.instrukcijeDogodkiOrder);

//POST new instructions event
//router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.post('/instrukcije-dogodki', avtentikacija, ctrlInstrukcije.instructionsEventCreate);

//GET instructions event by id
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);

//UPDATE instructions event by id (CURRENTLY NOT IN USE)
router.put('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekPosodobi);

//DELETE instructions event by id
router.delete('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekIzbrisi);

//POST filter
//router.post('/instrukcije-dogodki/:filter', ctrlInstrukcije.instrukcijeDogodki);


//ROUTER export
module.exports = router;