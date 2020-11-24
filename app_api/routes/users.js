//ROUTER import
const express = require('express');
const router = express.Router();


//Controller constant to access functions
const ctrlUporabniki = require('../controllers/users');


//POST register a new user
router.post('/uporabniki/', ctrlUporabniki.registrirajUporabnika);

//GET get user info for login authentication
router.get('/uporabniki/:email', ctrlUporabniki.prijaviUporabnika);

//GET list of all registered users
router.get('/uporabniki', ctrlUporabniki.uporabniki);

/*OBSOLETE
router.put('/uporabniki/:email', ctrlUporabniki.nastaviStatus);
*/


//ROUTER export
module.exports = router;