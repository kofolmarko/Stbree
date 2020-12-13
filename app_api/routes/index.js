const express = require('express');
const router = express.Router();

const ctrlChat = require('../controllers/sporocila');


router.get('/chat/:idUserja', ctrlChat.naloziSporocilo);
router.post('/chat/:idUserja', ctrlChat.kreirajSporocilo);
//router.put('/chat/:idUserja', ctrlChat.preurediSprocilo);




module.exports = router;