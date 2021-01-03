//ROUTER import
const express = require('express');
const router = express.Router();

//Authentication
const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

//Controller constant to access functions
const ctrlInstrukcije = require('../controllers/instructions');
const ctrlKomentarji = require('../controllers/komentarji');

/**
 * Kategorije dostopnih točk
 * @swagger
 * tags:
 *  - name: Komentarji
 *    description: Obvladovanje komentarjev v okviru dogodkov
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

//GET instructors list
router.get('/instruktorji', ctrlInstrukcije.instruktorji);

//GET instructions events list
router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);

//GET ordered by params
router.get('/instrukcije-dogodki/:parameter', ctrlInstrukcije.instrukcijeDogodkiOrder);

//POST new instructions event
//router.post('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodekKreiraj);
router.post('/instrukcije-dogodki', avtentikacija, ctrlInstrukcije.instructionsEventCreate);

//GET instructions event by id
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);

//UPDATE instructions event by id (CURRENTLY NOT IN USE)
router.put('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekPosodobi);

//DELETE instructions event by id
router.delete('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekIzbrisi);

//POST filter
//router.post('/instrukcije-dogodki/:filter', ctrlInstrukcije.instrukcijeDogodki);

//POST sign up for an event
router.post('/instrukcije-dogodki/dogodek/:idDogodka/prijava', avtentikacija, ctrlInstrukcije.prijavaNaDogodek);



/* Komentarji */
//router.post('/instrukcije-dogodki/dogodek/:idDogodka/komentarji', avtentikacija, ctrlKomentarji.komentarjiKreiraj);
//router.get('/instrukcije-dogodki/dogodek/:idDogodka/komentarji/:idKomentarja', ctrlKomentarji.komentarjiPreberiIzbranega);
//router.put('/instrukcije-dogodki/dogodek/:idDogodka/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiPosodobiIzbranega);
//router.delete('/instrukcije-dogodki/dogodek/:idDogodka/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiIzbrisiIzbranega);

router.route('/instrukcije-dogodki/:idDogodka/komentarji')
/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}/komentarji:
 *   post:
 *    summary: Dodajanje novega komentarja izbranemu dogodku
 *    description: Dodajanje **novega komentarja** s podatki o avtorju, oceni in besedilom komentarja **izbranemu dogodku** s podanim enoličnim identifikatorjem.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDogodka
 *       description: enolični identifikator dogodka
 *       schema:
 *        type: string
 *       required: true
 *       example: 5ded18eb51386c3799833191
 *    requestBody:
 *     description: Podatki o komentarju
 *     required: true
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "#/components/schemas/KomentarAzuriranje"
 *    responses:
 *     "201":
 *      description: Uspešno dodan komentar, ki se vrne v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/KomentarBranje"
 *     "400":
 *      description: Napaka pri shranjevanju komentarja.
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
 *      description: Napaka zahteve, zahtevanega dogodka ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dogodka:
 *          $ref: "#/components/examples/NeNajdemDogodka"
 */
  .post(ctrlKomentarji.komentarjiKreiraj);
router.route('/instrukcije-dogodki/dogodek/:idDogodka/komentarji/:idKomentarja')
/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}/komentarji/{idKomentarja}:
 *   get:
 *    summary: Podrobnost izbranega komentarja določenega dogodka
 *    description: Pridobitev **podrobnosti komentarja določenega dogodka** s podatki o enoličnem identifikatorju, datumu, avtorju, oceni in besedilu komentarja.
 *    tags: [Komentarji]
 *    parameters:
 *     - in: path
 *       name: idDogodka
 *       description: enolični identifikator dogodka
 *       schema:
 *        type: string
 *       required: true
 *       example: 5ded18eb51386c3799833191
 *     - in: path
 *       name: idKomentarja
 *       description: enolični identifikator komentarja
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "200":
 *      description: Uspešna zahteva s podrobnostmi dogodka v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: "#/components/schemas/KomentarDogodek"
 *     "404":
 *      description: Napaka zahteve, komentar ne obstaja.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dogodka:
 *           $ref: "#/components/examples/NeNajdemDogodka"
 *         ne najdem komentarja:
 *           $ref: "#/components/examples/NeNajdemKomentarja"
 *         ni nobenega komentarja:
*           $ref: "#/components/examples/NiNobenegaKomentarja"
 *     "500":
 *      description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
  .get(ctrlKomentarji.komentarjiPreberiIzbranega)
/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}/komentarji/{idKomentarja}:
 *   put:
 *    summary: Posodabljanje izbranega komentarja določenega dogodka
 *    description: Posodobitev **komentarja izbranega dogodka* s podatki o avtorju, oceni in besedilu komentarja.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDogodka
 *       description: enolični identifikator dogodka
 *       schema:
 *        type: string
 *       required: true
 *       example: 5ded18eb51386c3799833191
 *     - in: path
 *       name: idKomentarja
 *       description: enolični identifikator komentarja
 *       schema:
 *        type: string
 *       required: true
 *    requestBody:
 *     description: Podatki o komentarju
 *     required: true
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: "#/components/schemas/KomentarAzuriranje"
 *    responses:
 *     "200":
 *      description: Uspešno spremenjen komentar, ki se vrne v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/KomentarBranje"
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
 *      description: Napaka zahteve, zahtevanega dogodka oz. komentarja ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dogodka:
 *          $ref: "#/components/examples/NeNajdemDogodka"
 *         ne najdem komentarja:
 *          $ref: "#/components/examples/NeNajdemKomentarja"
 *     "500":
 *      description: Napaka pri iskanju dogodka.
 */
  .put(ctrlKomentarji.komentarjiPosodobiIzbranega)
/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}/komentarji/{idKomentarja}:
 *   delete:
 *    summary: Brisanje izbranega komentarja določenega dogodka
 *    description: Brisanje **komentarja izbranega dogodka**.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDogodka
 *       description: enolični identifikator dogodka
 *       schema:
 *        type: string
 *       required: true
 *     - in: path
 *       name: idKomentarja
 *       description: enolični identifikator komentarja
 *       schema:
 *        type: string
 *       required: true
 *    responses:
 *     "204":
 *      description: Uspešno izbrisan komentar.
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
 *      description: Napaka zahteve, zahtevanega dogodka oz. komentarja ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dogodka
 *          $ref: "#/components/examples/NeNajdemDogodka"
 *         ne najdem komentarja:
 *          $ref: "#/components/examples/NeNajdemKomentarja"
 *     "500":
 *      description: Napaka pri iskanju dogodka oz. brisanju komentarja.
 */
  .delete(avtentikacija, ctrlKomentarji.komentarjiIzbrisiIzbranega);


//ROUTER export
module.exports = router;