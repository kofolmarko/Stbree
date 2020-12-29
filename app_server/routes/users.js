//ROUTER import
var express = require('express');
var router = express.Router();


//Controller constant to access functions
const ctrlSigning = require('../controllers/signing');


//GET register page
router.get('/registracija', ctrlSigning.signup);

//POST register a new user
router.post('/registracija', ctrlSigning.registerNewUser);

//GET login page
router.get('/prijava', ctrlSigning.signin);

//POST login as a registered user
router.post('/prijava', ctrlSigning.loginUser);

//PUT logout
router.put('/odjava', ctrlSigning.signout);

//GET all registered users (only available via API)
//router.get('/uporabniki', ctrlSigning.users);

//ROUTER export
module.exports = router;