const express = require('express');
const router = express.Router();
const ctrlUporabnike = require('../controllers/User');

router.get('/users/:idUporabnika', 
  ctrlUporabnike.uporabnikPreberiProfil);

module.exports = router;