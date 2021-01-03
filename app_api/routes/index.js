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
 *  - name: db
 *    description: Obvladovanje podatkov v bazi
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
 *    security:
 *      - jwt: []
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
 *          $ref: "#/components/schemas/KontaktiBranje"
 *     "401":
 *       description: Napaka pri dostopu.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Napaka"
 *           examples:
 *             ni zetona:
 *               $ref: "#/components/examples/NiZetona"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */

    .get(ctrlChat.naloziKontakte)
/**
 * @swagger
 *  /chat/{emailUporabnika}:
 *   post:
 *    summary: Dodajanje novega sporocila
 *    description: Posiljanje novega sporocila izbranemu kontaktu.
 *    tags: [Sporocila]
 *    security:
 *      - jwt: []
 *    parameters:
 *     - in: path
 *       name: emailUporabnika
 *       description: enolični identifikator uporabnika
 *       schema:
 *        type: string
 *       required: true
 *       example: nejc@gmail.com
 *    requestBody:
 *        description: Podatki o dodanem sporocilu
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: "#/components/schemas/SporocanjeAzuriranjePovzetekZahteva"
 *    responses:
 *     "201":
 *      description: Uspešno dodano novo sporocilo.
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/SporocanjeAzuriranjePovzetekOdgovor"
 *     "401":
 *       description: Napaka pri dostopu.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Napaka"
 *           examples:
 *             ni zetona:
 *               $ref: "#/components/examples/NiZetona"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
    .post(avtentikacija, ctrlChat.kreirajSporocilo);


/**
 * @swagger
 *  /chat/{emailUporabnika}/{idPrejemnika}:
 *  get:
 *   summary: Nalozi sporocila kontakta.
 *   description: Nalozi sporocila, ki jih imas z izbranim kontaktom.
 *   tags: [Sporocila]
 *   security:
 *     - jwt: []
 *   parameters:
 *     - in: path
 *       name: emailUporabnika
 *       description: Enolični email uporabnika.
 *       schema:
 *         type: string
 *       required: true
 *       example: nejc@gmail.com
 *     - in: path
 *       name: idPrejemnika
 *       description: Enolični identifikator uporabnika.
 *       schema:
 *         type: string
 *       required: true
 *       example: 5ff0fb88879cc87a850bca40
 *   responses:
 *     "200":
 *       description: Uspešna zahteva s sporocili v odgovoru.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SporocilaBranje"
 *     "401":
 *      description: Napaka pri dostopu.
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Napaka"
 *          examples:
 *            ni zetona:
 *              $ref: "#/components/examples/NiZetona"
 *     "500":
 *       description: Napaka na strežniku pri dostopu do podatkovne baze.
 */    
    router.get('/chat/:emailUporabnika/:idPrejemnika', ctrlChat.naloziSporocilaKontakta);

/**
 * @swagger
 *  /chat/{emailUporabnika}/{emailKontakta}:
 *   post:
 *    summary: Dodajanje novega kontakta
 *    description: Dodajanje novega kontakta v bazo.
 *    tags: [Sporocila]
 *    security:
 *      - jwt: []
 *    parameters:
 *     - in: path
 *       name: emailUporabnika
 *       description: enolični email uporabnika
 *       schema:
 *        type: string
 *       required: true
 *       example: nejc@gmail.com
 *     - in: path
 *       name: emailKontakta
 *       description: enolični email kontakta
 *       schema:
 *        type: string
 *       required: true
 *       example: spela@gmail.com
 *    responses:
 *     "201":
 *      description: Uspešno dodan kontakt.
 *      content:
 *       application/json:
 *        schema:
 *          $ref: "#/components/schemas/KontaktAzuriranjePovzetekOdgovor"
 *     "401":
 *       description: Napaka pri dostopu.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Napaka"
 *           examples:
 *             ni zetona:
 *               $ref: "#/components/examples/NiZetona"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
    router.post('/chat/:emailUporabnika/:emailKontakta',avtentikacija, ctrlChat.kreirajKontakt);
    

const ctrlDB = require('../controllers/db');
//router.get("/vstavi/vse", ctrlChat.insertAll);
//router.get("/izbrisi/vse", ctrlChat.deleteAll);

/**
 * @swagger
 *  /db:
 *  get:
 *   summary: Izbris podatkov
 *   description: Izbris začetnih podatkv iz podatkovne baze
 *   tags: [db]
 *   security:
 *    - jwt: []
 *   responses:
 *    "201": 
 *      description: Baza je bila uspešno izbrisana.
 *    "404":
 *      description: Baze ni bilo mogoče najti.
 *    "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 *    
 */
router.get('/db/dropDB', ctrlDB.bazaIzbrisi);
/**
 * @swagger
 *  /db:
 *  get:
 *   summary: Izbris uporabnikov
 *   description: Izbris začetnih uporabnikov iz podatkovne baze
 *   tags: [db]
 *   security:
 *    - jwt: []
 *   responses:
 *    "201": 
 *      description: Uporabniki so bili uspešno izbrisani.
 *    "404":
 *      description: Uporabnikov ni bilo mogoče najti.
 *    "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 *    
 */
router.get('/db/dropUsers', ctrlDB.dropUsers);

module.exports = router;