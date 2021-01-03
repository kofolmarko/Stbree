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
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/DeloBranjePovzetek"
 *        "500":
 *          description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/ponudba-del', ctrlDela.dela);

/**
 * @swagger
 * /ponudba-del:
 *  post:
 *    summary: Dodajanje novega dela
 *    description: Dodajanje novega dela s podatki o nazivu, opisu, ceni in datumu.
 *    tags: [Dela]
 *    security:
 *      - jwt: []
 *    requestBody:
 *        description: Podatki o delu
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: "#/components/schemas/DeloAzuriranjePovzetekZahteva"
 *    responses:
 *      "201":
 *        description: Uspešno dodano novo delo, ki se vrne v rezultatu.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/DeloAzuriranjePovzetekOdgovor"
 *      "400":
 *        description: Napaka pri shranjevanju dela.
 *      "401":
 *        description: Napaka pri dostopu.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ni zetona:
 *                $ref: "#/components/examples/NiZetona"
 */
router.post('/ponudba-del', avtentikacija, ctrlDela.deloKreiraj);

/**
 * @swagger
 *  /ponudba-del/delo/{idDela}:
 *  get:
 *    summary: Podrobnosti dela
 *    description: Podrobnosti izbranega dela
 *    tags: [Dela]
 *    parameters:
 *      - in: path
 *        name: idDela
 *        description: enolični identifikator dela
 *        schema:
 *          type: string
 *        required: true
 *        example: 5ff1beb7383e3e0012d0f38b
 *    responses:
 *      "200":
 *        description: Uspešna zahteva s podrobnostmi zahtevane lokacije v rezultatu.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/DeloBranjePovzetek"
 *      "404":
 *        description: Napaka zahteve, dela ni mogoče najti.
 *        content:
 *          appliction/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem dela:
 *                $ref: "#/components/examples/NeNajdemDela"
 *      "500":
 *        description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/ponudba-del/delo/:idDela', ctrlDela.deloPreberi);

/**
 * @swagger
 *  /ponudba-del/delo/{idDela}:
 *  put:
 *    summary: Posodobitev dela
 *    description: Posodobitev izbranega dela
 *    tags: [Dela]
 *    security:
 *      - jwt: []
 *    requestBody:
 *      description: Podatki o delu
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: "#/components/schemas/DeloAzuriranjePovzetekZahteva"
 *    parameters:
 *      - in: path
 *        name: idDela
 *        description: enolični identifikator dela
 *        schame:
 *          type: string
 *        required: true
 *    responses:
 *      "200":
 *        description: Uspešno posodobljeno delo, ki se vrne v rezultatu
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/DeloAzuriranjePovzetekOdgovor"
 *      "401":
 *        description: Napaka pri dostopu
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ni zetona:
 *                $ref: "#/components/examples/NiZetona"
 *      "404":
 *        description: Napaka zahteve pri ažuriranju dela
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem dela:
 *                $ref: "#/components/examples/NeNajdemDela"
 *      "500":
 *        description: Napaka pri dostopu do podatkovne baze.
 */
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
 *              examples:
 *                ne najdem dela:
 *                  $ref: "#/components/examples/NeNajdemDela"
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
 *          description: Napaka pri brisanju lokacije.
 */
router.delete('/ponudba-del/delo/:idDela', avtentikacija, ctrlDela.deloIzbrisi);

/**
 * @swagger
 *  /ponudba-del/{parameter}:
 *  get:
 *    summary: Sortiranje del po parametru
 *    description: Sortiranje del po parametru
 *    tags: [Dela]
 *    paramters:
 *      - in: path
 *        name: parameter
 *        description: parameter po katerem sortiramo dela
 *        schame:
 *          type: string
 *    responses:
 *      "200": 
 *        description: Uspešno sortiranje del.
 *      "500":
 *        description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/ponudba-del/:parameter', ctrlDela.delaOrder);

/**
 * @swagger
 *  /ponudba-del/delo/{idDela}/prijava:
 *  post:
 *    summary: Prijava na delo
 *    description: Prijava na izbrano delo
 *    tags: [Dela]
 *    security:
 *      - jwt: []
 *    parameters:
 *      - in: path
 *        name: idDela
 *        description: enolični identifikator dela
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      "200":
 *        description: Uspešna prijava na izbrano delo.
 *      "400":
 *        description: Napaka pri prijavi na delo.
 *      "404":
 *        description: Napaka zahteve, dela ni mogoče najti.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem dela:
 *                $ref: "#/components/examples/NeNajdemDela"
 */
router.post('/ponudba-del/delo/:idDela/prijava', avtentikacija, ctrlDela.prijavaNaDelo);

/* Komentarji */
//router.post('/ponudba-del/delo/:idDela/komentarji', avtentikacija, ctrlKomentarji.komentarjiKreiraj);
//router.get('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', ctrlKomentarji.komentarjiPreberiIzbranega);
//router.put('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiPosodobiIzbranega);
//router.delete('/ponudba-del/delo/:idDela/komentarji/:idKomentarja', avtentikacija, ctrlKomentarji.komentarjiIzbrisiIzbranega);

router.route('/ponudba-del/delo/:idDela/komentarji')
/**
 * @swagger
 *  /ponudba-del/delo/{idDela}/komentarji:
 *   post:
 *    summary: Dodajanje novega komentarja izbranemu dogodku
 *    description: Dodajanje **novega komentarja** s podatki o avtorju, oceni in besedilom komentarja **izbranemu delu** s podanim enoličnim identifikatorjem.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDela
 *       description: enolični identifikator dela
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
 *      description: Napaka zahteve, zahtevanega dela ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dela:
 *          $ref: "#/components/examples/NeNajdemDela"
 */
  .post(avtentikacija, ctrlKomentarji.komentarjiKreiraj);
router.route('/ponudba-del/delo/:idDela/komentarji/:idKomentarja')
/**
 * @swagger
 *  /ponudba-del/delo/{idDela}/komentarji/{idKomentarja}:
 *   get:
 *    summary: Podrobnost izbranega komentarja določeega dela
 *    description: Pridobitev **podrobnosti komentarja določenega dela** s podatki o enoličnem identifikatorju, datumu, avtorju, oceni in besedilu komentarja.
 *    tags: [Komentarji]
 *    parameters:
 *     - in: path
 *       name: idDela
 *       description: enolični identifikator dela
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
 *      description: Uspešna zahteva s podrobnostmi dela v rezultatu.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: "#/components/schemas/KomentarDelo"
 *     "404":
 *      description: Napaka zahteve, komentar ne obstaja.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dela:
 *           $ref: "#/components/examples/NeNajdemDela"
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
 *  /ponudba-del/delo/{idDela}/komentarji/{idKomentarja}:
 *   put:
 *    summary: Posodabljanje izbranega komentarja določenega dela
 *    description: Posodobitev **komentarja izbranega dela** s podatki o avtorju, oceni in besedilu komentarja.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDela
 *       description: enolični identifikator dela
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
 *      description: Napaka zahteve, zahtevanega dela oz. komentarja ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dela:
 *          $ref: "#/components/examples/NeNajdemDela"
 *         ne najdem komentarja:
 *          $ref: "#/components/examples/NeNajdemKomentarja"
 *     "500":
 *      description: Napaka pri iskanju dela.
 */
  .put(avtentikacija, ctrlKomentarji.komentarjiPosodobiIzbranega)
/**
 * @swagger
 *  /ponudba-del/delo/{idLDogodka}/komentarji/{idKomentarja}:
 *   delete:
 *    summary: Brisanje izbranega komentarja določenega dela
 *    description: Brisanje **komentarja izbranega dela**.
 *    tags: [Komentarji]
 *    security:
 *     - jwt: []
 *    parameters:
 *     - in: path
 *       name: idDela
 *       description: enolični identifikator dela
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
 *      description: Napaka zahteve, zahtevanega dela oz. komentarja ni mogoče najti.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: "#/components/schemas/Napaka"
 *        examples:
 *         ne najdem dela:
 *          $ref: "#/components/examples/NeNajdemDela"
 *         ne najdem komentarja:
 *          $ref: "#/components/examples/NeNajdemKomentarja"
 *     "500":
 *      description: Napaka pri iskanju dela oz. brisanju komentarja.
 */
  .delete(avtentikacija, ctrlKomentarji.komentarjiIzbrisiIzbranega);

module.exports = router;

