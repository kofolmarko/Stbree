const express = require('express');

const router = express.Router();

const ctrlChat = require('../controllers/sporocila');

router.get('/chat/:idUserja', ctrlChat.naloziKontakte);
router.post('/chat/:idUserja', ctrlChat.kreirajSporocilo);
router.get('/chat/:idUserja/:idPrejemnika', ctrlChat.pridobiKontakt);
router.get("/vstavi/vse", ctrlChat.insertAll);
router.get("/izbrisi/vse", ctrlChat.deleteAll);


module.exports = router;