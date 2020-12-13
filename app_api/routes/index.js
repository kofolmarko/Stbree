const express = require('express');
const router = express.Router();

const ctrlInstrukcije = require('../controllers/instructions');
const ctrlChat = require('../controllers/sporocila');

router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);
router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.get('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);
router.put('/instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPosodobi);
router.delete('instrukcije-dogodki/:idDogodka', ctrlInstrukcije.instrukcijeDogodekIzbrisi);

router.get('/chat/:idUserja', ctrlChat.naloziSporocilo);
router.post('/chat/:idUserja', ctrlChat.kreirajSporocilo);
//router.put('/chat/:idUserja', ctrlChat.preurediSprocilo);




module.exports = router;