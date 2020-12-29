const express = require('express');
const router = express.Router();

const ctrlDela = require('../controllers/job');

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

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
 * /Dela:
 *  get:
 *    summary: Seznam ponudbe del
 *    description: Pridobitev **seznama ponudbe del**
 *    tags: [Dela]
 *      responses:
 *      "200":
 *        description: Uspešna zahteva s seznamom najdenih ponudb del.
 *        content:
 *          application/json:
 *            schema:
 *            type: array
 *            items: 
 *              $ref: "#/components/jobs/offers"
 *      "500":
 *        description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
/* GET job list */
router.get('/ponudba-del', ctrlDela.dela);

/**
 * /Dela:
 *  post:
 *     summary: Dodajanje novega dela
 *       description: Dodajanje novega dela s podatki o nazivu, opisu, ceni, datumu in 
 */
/* POST new job */
router.post('/ponudba-del', avtentikacija, ctrlDela.deloKreiraj);

/* GET job by ID */
router.get('/ponudba-del/delo/:idDela', ctrlDela.deloPreberi);

/* PUT job by ID */
router.put('/ponudba-del/delo/:idDela', avtentikacija, ctrlDela.deloUredi);

/* DELETE job by ID */
router.delete('/ponudba-del/delo/:idDela', avtentikacija, ctrlDela.deloIzbrisi);

//GET ordered by params
router.get('/ponudba-del/:parameter', ctrlDela.delaOrder);

module.exports = router;