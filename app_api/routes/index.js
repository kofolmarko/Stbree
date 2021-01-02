const express = require('express');
const router = express.Router();

const ctrlChat = require('../controllers/sporocila');

router.get('/chat/:emailUporabnika', ctrlChat.naloziKontakte);
router.get('/chat/:emailUporabnika/:idPrejemnika', ctrlChat.naloziSporocilaKontakta);
router.post('/chat/:emailUporabnika', ctrlChat.kreirajSporocilo);

router.get("/vstavi/vse", ctrlChat.insertAll);
router.get("/izbrisi/vse", ctrlChat.deleteAll);

//router.get('/db', ctrl)

module.exports = router;