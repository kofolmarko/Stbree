const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *  schemas:
 *    Delo:
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
 *        emailPonudnika:
 *          type: string
 *        zasedeno:
 *          type: boolean
 *      required:
 *        - naziv
 *        - opis
 *        - datum
 *        - emailPonudnika
 *    DeloBranjePovzetek:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          format: uuid
 *          description: enolični identifikator
 *          example: 5ff1beb7383e3e0012d0f38b
 *        naziv:
 *          type: string
 *          example: Programiranje
 *        opis:
 *          type: string
 *          example: Pomagaj mi sprogramirati program za seštevanje v javi!
 *        cena:
 *          type: number
 *          example: 3
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        emailPonudnika:
 *          type: email
 *          example: anamarija@gmail.com
 *      required:
 *        - _id
 *        - naziv
 *        - opis
 *        - datum
 *        - emailPonudnika
 *    DeloAzuriranjePovzetekZahteva:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *          example: Programiranje
 *        opis:
 *          type: string
 *          example: Pomagaj mi sprogramirati program za seštevanje v javi!
 *        cena:
 *          type: number
 *          example: 3
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        emailPonudnika:
 *          type: email
 *          example: anamarija@gmail.com
 *      required:
 *        - _id
 *        - naziv
 *        - opis
 *        - datum
 *        - emailPonudnika
 *    DeloAzuriranjePovzetekOdgovor:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *          example: Programiranje
 *        opis:
 *          type: string
 *          example: Pomagaj mi sprogramirati program za seštevanje v javi!
 *        cena:
 *          type: number
 *          example: 3
 *        datum:
 *          type: date
 *          example: 2021-11-08
 *        emailPonudnika:
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
 */

const komentarjiDelShema = new mongoose.Schema({
  avtor: {type: String, required: true},
  ocena: {type: Number, required: true, min: 0, max: 5},
  besediloKomentarja: {type: String, required: true},
  datum: {type: Date, "default": Date.now}
});

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  emailPonudnika: { type: String, required: true },
  zasedeno: { type: Boolean, "default": false },
  komentarji: [komentarjiDelShema]
});

mongoose.model('Delo', deloShema, 'Dela');
mongoose.model('KomentarDel', komentarjiDelShema, 'KomentarjiDel');

/**
 * @swagger
 *  components:
 *    examples:
 *      NeNajdemDela:
 *        summary: ne najdem dela
 *        value:
 *          sporočilo: Ne najdem dela.
 *      NiZetona:
 *        summary: ni JWT zetona
 *        value:
 *          sporočilo: "UnauthorizedError: No authorization token was found."
 */