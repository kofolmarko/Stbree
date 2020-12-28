const mongoose = require('mongoose');

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
  ura: { type: String, required: true },
  steviloProstihMest: { type: Number, required: true },
  emailInstruktorja: { type: String, required: true }
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');