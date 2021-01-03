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

/**
 * Kategorije dostopnih točk
 * @swagger
 * tags:
 *  - name: Profil
 *    description: Obvladovanje profila
 */

/**
 * Varnostna shema dostopa
 * @swagger
 * components:
 *  securitySchemes:
 *   jwt:
 *    type: http
 *    scheme: bearer
 *    in: header
 *    bearerFormat: JWT
 */

 /**
 * @swagger
 *  /uporabnik/{emailUporabnika}:
 *   get:
 *    summary: Profil posameznika
 *    description: Pridobitev **profila**, glede na **emailu**
 *    tags: [Profil]
 *    parameters:
 *     - in: path
 *       name: emailUporabnika
 *       description: enolični email uporabnika
 *       schema:
 *        type: string
 *       required: true
 *       example: hp@hogwarts.com 
 *    responses:
 *     "200":
 *      description: Uspešna zahteva s pridobitvijo profila v rezultatu.
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: "#/components/schemas/ProfilBranjePovzetek"
 *     "400":
 *      description: Napaka zahteve, manjkajo obvezni parametri.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        example:
 *         sporočilo: Parametar email je obvezen.
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */

//GET ANGULAR get user by id -----> now by EMAIL because of jwt (it's safer)
router.get('/uporabnik/:emailUporabnika', ctrlUporabniki.najdiUporabnik);

/*PUT EXPRESS registered users*/
//router.put('/uporabnik/:idUporabnika', ctrlUporabniki.posodobiUporabnika);

/**
 * @swagger
 *  /uporabnik/{emailUporabnika}:
 *   put:
 *    summary: Posodabljanje profil posameznika
 *    description: Posodobitev **profila** s podatki o telefonski stevilki, status instruktorja, opisu.
 *    tags: [Profil]
 *    security:
 *     - jwt: []
 *    requestBody:
 *     description: Podatki o profilu
 *     required: true
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "#/components/schemas/ProfilAzuriranjePovzetekZahteva"
 *    parameters:
 *     - in: path
 *       name: emailUporabnika
 *       description: enolični email uporabnika
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "200":
 *      description: Uspešno posodobljena profil, ki se vrne v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/ProfilAzuriranjePovzetekOdgovor"
 *     "401":
 *      description: Napaka pri dostopu.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ni zetona:
 *          $ref: "#/components/examples/NiZetona"
 *     "404":
 *      description: Napaka zahteve pri ažuriranju lokacije
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem profila:
 *          $ref: "#/components/examples/NiProfila"
 *     "500":
 *      description: Napaka pri dostopu do podatkovne baze.
 */

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

/**
 * @swagger
 *  /uporabnik/{emailUporabnika}:
 *    delete:
 *      summary: Brisanje uporabnika
 *      description: Brisanje **uporabnika**.
 *      tags: [Profil]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: emailUporabnika
 *          description: enolični email uporabnika
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        "204":
 *          description: Uspešno izbrisan profil.
 *        "404":
 *          description: Napaka zahteve, zahtevanega profila ni mogoče najti.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Napaka"
 *              examples:
 *                ne najdem profila:
 *                  $ref: "#/components/examples/NeNajdemProfila"
 *        "401":
 *          description: Napaka pri dostopu.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Napaka"
 *              examples:
 *                ni zetona:
 *                  $ref: "#/components/examples/NiZetona"
 *        "500":
 *          description: Napaka pri brisanju profila.
 */

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
/**
 * @swagger
 *   /registracija:
 *     post:
 *       summary: Registracija novega uporabnika
 *       description: Registracija **novega uporabnika** s podatki o imenu, elektronskem naslovu in geslu.
 *       tags: [Avtentikacija]
 *       requestBody:
 *         description: Podatki za registracijo
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: "#/components/schemas/UporabnikRegistracija"
 *       responses:
 *         "200":
 *           description: Uspešna registracija uporabnika z JWT žetonom v rezultatu.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/AvtentikacijaOdgovor"
 *         "400":
 *           description: Napaka zahteve, pri registraciji so obvezni ime, elektronski naslov in geslo.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Napaka"
 *             example:
 *               sporočilo: Zahtevani so vsi podatki.
 *         "500":
 *           description: Napaka na strežniku pri registraciji uporabnika.
 */

router.post('/registracija', ctrlUporabniki.registracija);

/**
 * @swagger
 *   /prijava:
 *     post:
 *       summary: Prijava obstoječega uporabnika
 *       description: Prijava **obstoječega uporabnika** z elektronskim naslovom in geslom.
 *       tags: [Avtentikacija]
 *       requestBody:
 *         description: Prijavni podatki
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *                $ref: "#/components/schemas/UporabnikPrijava"
 *       responses:
 *         "200":
 *           description: Uspešna prijava uporabnika z JWT žetonom v rezultatu.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/AvtentikacijaOdgovor"
 *         "400":
 *           description: Napaka zahteve, pri prijavi sta obvezna elektronski naslov in geslo.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Napaka"
 *               example:
 *                 sporočilo: Zahtevani so vsi podatki.
 *         "401":
 *           description: Napaka pri prijavi uporabnika.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Napaka"
 *               examples:
 *                 uporabniško ime:
 *                   value:
 *                     sporočilo: Napačno uporabniško ime.
 *                   summary: napačno uporabniško ime
 *                 geslo:
 *                   value:
 *                     sporočilo: Napačno geslo.
 *                   summary: napačno geslo
 *         "500":
 *           description: Napaka na strežniku pri preverjanju uporabnika.
 */
router.post('/prijava', ctrlUporabniki.prijava);

//ROUTER export
module.exports = router;