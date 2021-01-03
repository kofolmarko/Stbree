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
 *  - name: Inštrukcije
 *    description: Obvladovanje inštrukcij
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

/**
 * @swagger
 *  /instruktorji:
 *    get:
 *      summary: Seznam ponudbe inštruktorjev
 *      description: Pridobitev **seznama inštruktorjev**
 *      tags: [Instruktorji]
 *      responses:
 *        "200":
 *          description: Uspešna zahteva s seznamom najdenih inštruktorjev.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/InstruktorjiBranjePovzetek"
 *        "500":
 *          description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/instruktorji', ctrlInstrukcije.instruktorji);

/**
 * @swagger
 *  /instrukcije-dogodki:
 *    get:
 *      summary: Seznam ponudbe instrukcij in dogodkov
 *      description: Pridobitev **seznama instrukcij in dogodkov**
 *      tags: [Instrukcije-dogodki]
 *      responses:
 *        "200":
 *          description: Uspešna zahteva s seznamom najdenih inštrukcij in dogodkov.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/InstrukcijeDogodekBranjePovzetek"
 *        "500":
 *          description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/instrukcije-dogodki', ctrlInstrukcije.instrukcijeDogodki);

/**
 * @swagger
 * /instrukcije-dogodki:
 *  post:
 *    summary: Dodajanje nove inštrukcije
 *    description: Dodajanje nove inštrukcije s podatki o nazivu, opisu, ceni in datumu.
 *    tags: [Instrukcije-dogodki]
 *    security:
 *      - jwt: []
 *    requestBody:
 *        description: Podatki o inštrukciji
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: "#/components/schemas/InstrukcijeDogodekAzuriranjePovzetekZahteva"
 *    responses:
 *      "201":
 *        description: Uspešno dodano nova inštrukcija, ki se vrne v rezultatu.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/InstrukcijeDogodekAzuriranjePovzetekOdgovor"
 *      "400":
 *        description: Napaka pri shranjevanju inštrukcije.
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
router.post('/instrukcije-dogodki', avtentikacija, ctrlInstrukcije.instructionsEventCreate);

/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}:
 *  get:
 *    summary: Podrobnosti inštrukcije
 *    description: Podrobnosti izbranega inštrukcije
 *    tags: [Instrukcije-dogodki]
 *    parameters:
 *      - in: path
 *        name: idInšturkcije
 *        description: enolični identifikator inštrukcije
 *        schema:
 *          type: string
 *        required: true
 *        example: 5ff1beb7383e3e0012d0f38b
 *    responses:
 *      "200":
 *        description: Uspešna zahteva s podrobnostmi zahtevane dogodka v rezultatu.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/InstrukcijeDogodekBranjePovzetek"
 *      "404":
 *        description: Napaka zahteve, inštrukcije ni mogoče najti.
 *        content:
 *          appliction/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem inštrukcije:
 *                $ref: "#/components/examples/NeNajdemInstrukcije"
 *      "500":
 *        description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/instrukcije-dogodki/dogodek/:idDogodka', ctrlInstrukcije.instrukcijeDogodekPreberi);

/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}:
 *  put:
 *    summary: Posodobitev inštrukcije
 *    description: Posodobitev izbranega inštrukcije
 *    tags: [Instrukcije-dogodki]
 *    security:
 *      - jwt: []
 *    requestBody:
 *      description: Podatki o inštrukcijah
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: "#/components/schemas/InstrukcijeDogodekAzuriranjePovzetekZahteva"
 *    parameters:
 *      - in: path
 *        name: idInstrukcije
 *        description: enolični identifikator inštrukcije
 *        schame:
 *          type: string
 *        required: true
 *    responses:
 *      "200":
 *        description: Uspešno posodobljeno inštrukcije, ki se vrne v rezultatu
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/InstrukcijeDogodekAzuriranjePovzetekOdgovor"
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
 *        description: Napaka zahteve pri ažuriranju inštrukcije
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem inštrukcije:
 *                $ref: "#/components/examples/NeNajdemInstrukcije"
 *      "500":
 *        description: Napaka pri dostopu do podatkovne baze.
 */
router.put('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekPosodobi);

/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}:
 *    delete:
 *      summary: Brisanje izbrane inštrukcije
 *      description: Brisanje **izbrane inštrukcije**.
 *      tags: [Instrukcije-dogodki]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: idInstrukcije
 *          description: enolični identifikator inštrukcije
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        "204":
 *          description: Uspešno izbrisana inštrukcija.
 *        "404":
 *          description: Napaka zahteve, zahtevane inštrukcije ni mogoče najti.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Napaka"
 *              examples:
 *                ne najdem inštrukcije:
 *                  $ref: "#/components/examples/NeNajdemInstrukcije"
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
 *          description: Napaka pri brisanju dogodka.
 */
router.delete('/instrukcije-dogodki/dogodek/:idDogodka', avtentikacija, ctrlInstrukcije.instrukcijeDogodekIzbrisi);

/**
 * @swagger
 *  /instrukcije-dogodki/{parameter}:
 *  get:
 *    summary: Sortiranje inštrukcij po parametru
 *    description: Sortiranje inštrukcij po parametru
 *    tags: [Instrukcije-dogodki]
 *    paramters:
 *      - in: path
 *        name: parameter
 *        description: parameter po katerem sortiramo inštrucije
 *        schame:
 *          type: string
 *    responses:
 *      "200": 
 *        description: Uspešno sortiranje inštrukcij.
 *      "500":
 *        description: Napaka na strežniku pri dostopu do podatkovne baze.
 */
router.get('/instrukcije-dogodki/:parameter', ctrlInstrukcije.instrukcijeDogodkiOrder);

/**
 * @swagger
 *  /instrukcije-dogodki/dogodek/{idDogodka}/prijava:
 *  post:
 *    summary: Prijava na inštrukcijo
 *    description: Prijava na izbrano inštrukcijo
 *    tags: [Instrukcije-dogodki]
 *    security:
 *      - jwt: []
 *    parameters:
 *      - in: path
 *        name: idInstrukcije
 *        description: enolični identifikator inštrukcije
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      "200":
 *        description: Uspešna prijava na izbrano inštrukcijo.
 *      "400":
 *        description: Napaka pri prijavi na inštrukcijo.
 *      "404":
 *        description: Napaka zahteve, inštrukcije ni mogoče najti.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Napaka"
 *            examples:
 *              ne najdem inštrukcije:
 *                $ref: "#/components/examples/NeNajdemInstrukcije"
 */
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
 *         ne najdem dogodka:
 *          $ref: "#/components/examples/NeNajdemDogodka"
 *         ne najdem komentarja:
 *          $ref: "#/components/examples/NeNajdemKomentarja"
 *     "500":
 *      description: Napaka pri iskanju dogodka oz. brisanju komentarja.
 */
  .delete(ctrlKomentarji.komentarjiIzbrisiIzbranega);


//ROUTER export
module.exports = router;