//ROUTER import
const express = require('express');
const router = express.Router();

//Controller constant to access functions
const ctrlUporabniki = require('../controllers/users');

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

//POST register a new user
//router.post('/uporabniki/', ctrlUporabniki.registrirajUporabnika);

//GET get user info for login authentication
//router.get('/uporabniki/:email', ctrlUporabniki.prijaviUporabnika);

//GET  EXPRESS get user by id
//router.get('/uporabnik/:idUporabnika', ctrlUporabniki.najdiUporabnika);

//GET ANGULAR get user by id -----> now by EMAIL because of jwt (it's safer)
router.get('/uporabnik/:emailUporabnika', ctrlUporabniki.najdiUporabnik);

/*PUT EXPRESS registered users*/
//router.put('/uporabnik/:idUporabnika', ctrlUporabniki.posodobiUporabnika);

/*PUT ANGULAR registered users*/
router.put('/uporabnik/:emailUporabnika', avtentikacija, ctrlUporabniki.posodobiUporabnik);

/*PUT geslo*/
//router.put('/uporabnik/geslo/:idUporabnika', ctrlUporabniki.posodobiGeslo);

/*PUT ANGULAR geslo*/
router.put('/uporabnik/geslo/:emailUporabnika',  ctrlUporabniki.posodobiGeslo);

/*PUT ocena*/
router.put('/uporabnik/ocena/:idUporabnika', ctrlUporabniki.posodobiOcena);

/*DELETE EXPRESS user*/
//router.delete('/uporabnik/:idUporabnika', ctrlUporabniki.izbrisiUporabnika);

/*DELETE ANGULAR user*/
router.delete('/uporabnik/:emailUporabnika', avtentikacija, ctrlUporabniki.izbrisiUporabnik);

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