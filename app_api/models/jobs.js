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
 */

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  emailPonudnika: { type: String, required: true },
  zasedeno: { type: Boolean, "default": false }
});

mongoose.model('Delo', deloShema, 'Dela');