const express = require('express');
const router = express.Router();

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const ctrlChat = require('../controllers/sporocila');
/**
 * Kategorije dostopnih točk
 * @swagger
 * tags:
 *  - name: Sporocila
 *    description: Obvladovanje sporocil
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
router.route('/chat/:emailUporabnika')
/**
 * @swagger
 *  /chat/{emailUporabnika}:
 *   get:
 *    summary: Nalozi seznam kontaktov
 *    description: Pridobitev **seznama kontaktov**, glede na **trenutnega uporabnika**.
 *    tags: [Sporocila]
 *    parameters:
*     - in: path
 *       name: emailUporabnika
 *       description: enolični identifikator uporabnika
 *       schema:
 *        type: string
 *       required: true
 *       example: nejc@gmail.com
 *    responses:
 *     "200":
 *      description: Uspešna zahteva s seznamom najdenih kontaktov v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: "#/components/chat/LokacijaBranjePovzetek"
 *     "400":
 *      description: Napaka zahteve, manjkajo obvezni parametri.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        example:
 *         sporočilo: Parametra lng in lat sta obvezna.
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */

    .get(ctrlChat.naloziKontakte)
    .post(avtentikacija, ctrlChat.kreirajSporocilo);
const ctrlDB = require('../controllers/db');

router.get('/chat/:emailUporabnika/:idPrejemnika', ctrlChat.naloziSporocilaKontakta);
router.post('/chat/:emailUporabnika/:emailKontakta',avtentikacija, ctrlChat.kreirajKontakt);

//router.get("/vstavi/vse", ctrlChat.insertAll);
//router.get("/izbrisi/vse", ctrlChat.deleteAll);

router.get('/db/dropDB', ctrlDB.bazaIzbrisi);

module.exports = router;