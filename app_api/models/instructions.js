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
 * KomentarDelo:
 *    description: Podatki komentarja z nazivom in enoličnim identifikatorjem dela
 *    type: object
 *    properties:
 *     delo:
 *      type: object
 *      properties:
 *       id:
 *        type: string
 *        format: uuid
 *        example: 5ded18eb51386c3799833191
 *       naziv:
 *        type: string
 *        example: Prevod iz angleščine v slovenščino
 *      required:
 *       - id
 *       - naziv
 *     komentar:
 *      type: object
 *      $ref: "#/components/schemas/KomentarBranje"
 *    required:
 *     - delo
 *     - komentar
 */

const komentarjiShema = new mongoose.Schema({
  avtor: {type: String, required: true},
  ocena: {type: Number, required: true, min: 0, max: 5},
  besediloKomentarja: {type: String, required: true},
  datum: {type: Date, "default": Date.now}
});
/**
 * @swagger
 * components:
 *  schemas:
 *   InstrukcijeDogodek:
 *    type: object
 *    properties:
 *     naziv:
 *      type: string
 *     opis:
 *      type: string
 *     cena:
 *      type: number
 *     datum:
 *      type: date
 *     ura:
 *      type: string
 *     steviloProstihMest:
 *      type: number
 *     emailInstruktorja:
 *      type: string
 *    required:
 *     - naziv
 *     - opis
 *     - datum
 *     - ura
 *     - steviloProstihMest
 *     - emailInstruktorja
 */

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  ura: { type: String, required: true},
  steviloProstihMest: { type: Number, required: true},
  emailInstruktorja: { type: String, required: true},
  komentarji: [komentarjiShema]
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');
mongoose.model('Komentar', komentarjiShema, 'Komentarji');
