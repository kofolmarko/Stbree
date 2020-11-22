const express = require('express');
const router = express.Router();

const ctrlInstrukcije = require('../controllers/instructions');

router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);
router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.get('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);
router.put('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPosodobi);
router.delete('instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekIzbrisi);


module.exports = router;