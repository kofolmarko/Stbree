const mongoose = require('mongoose');

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
