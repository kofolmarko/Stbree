var express = require('express');
var router = express.Router();

var ctrlLanding = require('../controllers/landing');

/* GET home page. */
router.get('/', ctrlLanding.landing);

module.exports = router;
