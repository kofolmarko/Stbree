const express = require('express');
const router = express.Router();

const ctrlInstrukcije = require('../controllers/instructions');

router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);
router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.get('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);
router.put('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPosodobi);
router.delete('instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekIzbrisi);

const ctrlDela = require('../controllers/job');

router.get('/dela', ctrlDela.dela);
router.post('/dela', ctrlDela.deloKreiraj);
router.get('/dela/:idDela', ctrlDela.deloPreberi);
router.put('/dela/:idDela', ctrlDela.deloPosodobi);
router.delete('dela/:idDela', ctrlDela.deloIzbrisi);

module.exports = router;