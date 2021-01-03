const mongoose = require('mongoose');

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