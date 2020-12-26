//ROUTER import
const express = require('express');
const router = express.Router();

//Controller constant to access functions
const ctrlUporabniki = require('../controllers/users');

//POST register a new user
//router.post('/uporabniki/', ctrlUporabniki.registrirajUporabnika);

//GET get user info for login authentication
//router.get('/uporabniki/:email', ctrlUporabniki.prijaviUporabnika);

//GET get user by id -----> now by EMAIL because of jwt (it's safer)
//router.get('/uporabnik/:idUporabnika', ctrlUporabniki.najdiUporabnika);
router.get('/uporabnik/:emailUporabnika', ctrlUporabniki.najdiUporabnika);

/*PUT registered users*/
router.put('/uporabnik/:idUporabnika', ctrlUporabniki.posodobiUporabnika);

/*PUT geslo*/
router.put('/uporabnik/geslo/:idUporabnika', ctrlUporabniki.posodobiGeslo);

/*PUT ocena*/
router.put('/uporabnik/ocena/:idUporabnika', ctrlUporabniki.posodobiOcena);

/*DELETE user*/
router.delete('/uporabnik/:idUporabnika', ctrlUporabniki.izbrisiUporabnika);

//GET list of all registered users
router.get('/uporabniki', ctrlUporabniki.uporabniki);

//PUT new event signup
router.put('/uporabniki/:loginID/dogodek/:idDogodka', ctrlUporabniki.prijavaNaDogodek);

//PUT leave event
router.put('/uporabniki/:loginID/dogodek/odjava/:idDogodka', ctrlUporabniki.odjavaOdDogodka);

//PUT new job signup
router.put('/uporabniki/:loginID/delo/:idDela', ctrlUporabniki.prijavaNaDelo);

//PUT leave job
router.put('/uporabniki/:loginID/delo/odjava/:idDela', ctrlUporabniki.odjavaOdDela);

/*OBSOLETE
router.put('/uporabniki/:email', ctrlUporabniki.nastaviStatus);
*/

/* Avtentikacija */
router.post('/registracija', ctrlUporabniki.registracija);
router.post('/prijava', ctrlUporabniki.prijava);

//ROUTER export
module.exports = router;