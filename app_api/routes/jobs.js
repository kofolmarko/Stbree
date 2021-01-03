const express = require('express');
const router = express.Router();

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const ctrlDela = require('../controllers/job');
const ctrlKomentarji = require('../controllers/komentarji-del');

/**
 * Kategorije dostopnih točk
 * @swagger
 * tags:
 *  - name: Dela
 *    description: Obvladovanje del
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
 *  /ponudba-del:
 *    get:
 *      summary: Seznam ponudbe del
 *      description: Pridobitev **seznama ponudbe del**
 *      tags: [Dela]
 *      responses:
 *        "200":
 *          description: Uspešna zahteva s seznamom najdenih ponudb del.
 *          content:
 *            application/json:
 *              schema:
 *              type: array
 *              items: 
 *                $ref: "#/components/jobs/offers"
 *        "500":
 *          description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
/* GET job list */
router.get('/ponudba-del', ctrlDela.dela);

/**
 * /Dela:
 *  post:
 *    summary: Dodajanje novega dela
 *    description: Dodajanje novega dela s podatki o nazivu, opisu, ceni in datumu.
 *    tags: [Dela]
 *    security:
 *      - jwt: []
 *    parameters:
 *      - in: path
 *        name: idDela
 *        description: Enolični identifikator Dela.
 *        schema:
 *          type: string
 *        required: true
 *        example: 
 *    requestBody:
 * 
 *      
 */
/* POST new job */
router.post('/ponudba-del', avtentikacija, ctrlDela.deloKreiraj);

/* GET job by ID */
router.get('/ponudba-del/delo/:idDela', ctrlDela.deloPreberi);

/* PUT job by ID */
router.put('/ponudba-del/delo/:idDela', avtentikacija, ctrlDela.deloUredi);

/**
 * @swagger
 *  /ponudba-del/delo/{idDela}:
 *    delete:
 *      summary: Brisanje izbranega dela
 *      description: Brisanje **izbranega dela**.
 *      tags: [Dela]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: idDela
 *          description: enolični identifikator dela
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        "204":
 *          description: Uspešno izbrisano delo.
 *        "404":
 *          description: Napaka zahteve, zahtevanega dela ni mogoče najti.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Napaka"
 *        "500":
 *          description: Napaka pri brisanju lokacije.
 */
router.delete('/ponudba-del/delo/:idDela', avtentikacija, ctrlDela.deloIzbrisi);

//GET ordered by params
router.get('/ponudba-del/:parameter', ctrlDela.delaOrder);

//POST sign up for a job
router.post('/ponudba-del/delo/:idDela/prijava', avtentikacija, ctrlDela.prijavaNaDelo);

/* Komentarji */
router.post('/ponudba-del/delo/:idDela/komentarji', avtentikacija, ctrlKomentarji.komentarjiKreiraj);
router.get('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', ctrlKomentarji.komentarjiPreberiIzbranega);
router.put('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiPosodobiIzbranega);
router.delete('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiIzbrisiIzbranega);

module.exports = router;