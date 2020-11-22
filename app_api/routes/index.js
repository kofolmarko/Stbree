const express = require('express');
const router = express.Router();

const ctrlInstrukcije = require('../controllers/instructions');

router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);
router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);
router.put('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPosodobi);
router.delete('instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekIzbrisi);


module.exports = router;