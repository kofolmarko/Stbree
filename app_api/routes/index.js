const express = require('express');
const router = express.Router();
//const ctrlLokacije = require('../controllers/lokacije');
//const ctrlKomentarji = require('../controllers/komentarji');

ctrlInstructions = require('../controllers/instructions');

router.post('/instrukcije-dogodki', ctrlInstructions.instrukcijeDogodekKreiraj);


/* POPRAVI NA SVOJE 

router.get('/lokacije', 
  ctrlLokacije.lokacijeSeznamPoRazdalji);
router.post('/lokacije', 
  ctrlLokacije.lokacijeKreiraj);
router.get('/lokacije/:idLokacije', 
  ctrlLokacije.lokacijePreberiIzbrano);
router.put('/lokacije/:idLokacije', 
  ctrlLokacije.lokacijePosodobiIzbrano);
router.delete('/lokacije/:idLokacije', 
  ctrlLokacije.lokacijeIzbrisiIzbrano);

router.post('/lokacije/:idLokacije/komentarji', 
  ctrlKomentarji.komentarjiKreiraj);
router.get('/lokacije/:idLokacije/komentarji/:idKomentarja', 
  ctrlKomentarji.komentarjiPreberiIzbranega);
router.put('/lokacije/:idLokacije/komentarji/:idKomentarja', 
  ctrlKomentarji.komentarjiPosodobiIzbranega);
router.delete('/lokacije/:idLokacije/komentarji/:idKomentarja', 
  ctrlKomentarji.komentarjiIzbrisiIzbranega);
*/

module.exports = router;