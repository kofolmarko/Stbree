const express = require('express');
const router = express.Router();

const ctrlChat = require('../controllers/sporocila');

router.get('/chat/:idUserja', ctrlChat.naloziSporocilo);
router.post('/chat/:idUserja', ctrlChat.kreirajSporocilo);



module.exports = router;