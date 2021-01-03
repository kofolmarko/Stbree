const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *  schemas:
 *   KomentarAzuriranje:
 *    description: Podatki komentarja pri ažuriranju
 *    type: object
 *    properties:
 *     avtor:
 *      type: string
 *      example: Andrej Rustja
 *     ocena:
 *      type: integer
 *      minimum: 0
 *      maximum: 5
 *      example: 1
 *     besediloKomentarja:
 *      type: string
 *      example: Zelo dobra razlaga!
 *    required:
 *     - avtor
 *     - ocena
 *     - besediloKomentarja
 *   KomentarBranje:
 *    description: Podatki komentarja pri branju
 *    type: object
 *    properties:
 *     _id:
 *      type: string
 *      format: uuid
 *      example: 5e04bfb6a3aff223697cbbcb
 *     avtor:
 *      type: string
 *      example: Andrej Rustja
 *     ocena:
 *      type: integer
 *      minimum: 0
 *      maximum: 5
 *      example: 1
 *     besediloKomentarja:
 *      type: string
 *      example: Zelo dobra razlaga!
 *     datum:
 *      type: string
 *      format: date-time
 *      example: 2019-12-26T14:12:06.488Z
 *    required:
 *     - _id
 *     - avtor
 *     - ocena
 *     - besediloKomentarja
 *     - datum
 *   KomentarDogodek:
 *    description: Podatki komentarja z nazivom in enoličnim identifikatorjem dogodka
 *    type: object
 *    properties:
 *     dogodek:
 *      type: object
 *      properties:
 *       id:
 *        type: string
 *        format: uuid
 *        example: 5ded18eb51386c3799833191
 *       naziv:
 *        type: string
 *        example: Programiranje v Javi
 *      required:
 *       - id
 *       - naziv
 *     komentar:
 *      type: object
 *      $ref: "#/components/schemas/KomentarBranje"
 *    required:
 *     - dogodek
 *     - komentar
 */

const komentarjiShema = new mongoose.Schema({
  avtor: { type: String, required: true },
  ocena: { type: Number, required: true, min: 0, max: 5 },
  besediloKomentarja: { type: String, required: true },
  datum: { type: Date, "default": Date.now }
});
/**
 * @swagger
 * components:
 *   schemas:
 *    InstrukcijeDogodek:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *        opis:
 *          type: string
 *        cena:
 *          type: number
 *        datum:
 *          type: date
 *        ura:
 *          type: string
 *        steviloProstihMest:
 *          type: number
 *        emailInstruktorja:
 *          type: string
 *      required:
 *        - naziv
 *        - opis
 *        - datum
 *        - ura
 *        - steviloProstihMest
 *        - emailInstruktorja
 *    InstrukcijeDogodekBranjePovzetek:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          format: uuid
 *          description: enolični identifikator
 *          example: 5ff1beb7383e3e0012d0f38c
 *        naziv:
 *          type: string
 *          example: Uvod v izdelovanje html spletnih strani
 *        opis:
 *          type: string
 *          example: V tem izobraževanju bom predstavil kako se izdela preprosta spletna stran....
 *        cena:
 *          type: number
 *          example: 4
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        ura:
 *          type: time
 *          example: 18:00:00
 *        steviloProstihMest:
 *          type: number
 *          example: 10
 *        emailInstruktorja:
 *          type: email
 *          example: anamarija@gmail.com
 *      required:
 *        - naziv
 *        - opis
 *        - datum
 *        - ura
 *        - steviloProstihMest
 *        - emailInstruktorja
 *    InstrukcijeDogodekAzuriranjePovzetekZahteva:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *          example: Uvod v izdelovanje html spletnih strani
 *        opis:
 *          type: string
 *          example: V tem izobraževanju bom predstavil kako se izdela preprosta spletna stran....
 *        cena:
 *          type: number
 *          example: 4
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        ura:
 *          type: time
 *          example: 18:00:00
 *        steviloProstihMest:
 *          type: number
 *          example: 10
 *        emailInstruktorja:
 *          type: email
 *          example: anamarija@gmail.com
 *      required:
 *        - naziv
 *        - opis
 *        - datum
 *        - ura
 *        - steviloProstihMest
 *        - emailInstruktorja
 *    InstrukcijeDogodekAzuriranjePovzetekOdgovor:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *          example: Uvod v izdelovanje html spletnih strani
 *        opis:
 *          type: string
 *          example: V tem izobraževanju bom predstavil kako se izdela preprosta spletna stran....
 *        cena:
 *          type: number
 *          example: 4
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        ura:
 *          type: time
 *          example: 18:00:00
 *        steviloProstihMest:
 *          type: number
 *          example: 10
 *        emailInstruktorja:
 *          type: email
 *          example: anamarija@gmail.com
 *    Napaka:
 *      type: object
 *      description: Podrobnosti napake
 *      required:
 *        - sporočilo
 *      properties:
 *        sporočilo:
 *        type: string
 *      example:
 *        sporočilo: Parametri so obvezni.
 *    InstruktorjiBranjePovzetek:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          format: uuid
 *          description: enolični identifikator
 *          example: 5ff1beb7383e3e0012d0f38c
 *        ime:
 *          type: string
 *          example: Janez
 *        priimek:
 *          type: string
 *          example: Novak
 *        email: 
 *          type: email
 *          example: janez.novak@gmail.com
 *        statusInstruktorja:
 *          type: boolean
 *          example: true
 *        opis:
 *          type: string
 *          example: Sem instruktor
 *        telefonskaStevilka:
 *          type: number
 *          exmple: 123123123
 */

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  ura: { type: String, required: true },
  steviloProstihMest: { type: Number, required: true },
  emailInstruktorja: { type: String, required: true },
  komentarji: [komentarjiShema]
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');
mongoose.model('Komentar', komentarjiShema, 'Komentarji');

/**
 * @swagger
 *  components:
 *    examples:
 *      NiZetona:
 *        summary: ni JWT zetona
 *        value:
 *          sporočilo: "UnauthorizedError: No authorization token was found."
 *      NeNajdemInstrukcije:
 *        summary: ne najdem instrukcije
 *        value:
 *          sporočilo: Ne najdem inštrukcije.
 */