const mongoose = require('mongoose');

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: {type: Number, "default": 0},
  datum: { type: Date, required: true },
  emailPonudnika: { type: String, required: true },
  zasedeno: { type: Boolean, "defauld": false }
});

mongoose.model('Delo', deloShema, 'Dela');