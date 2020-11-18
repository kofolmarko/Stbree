const mongoose = require('mongoose');

const instrukcijaShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: Number,
  datum: { type: Date, required: true },
  tip: { type: String, required: true }
});

mongoose.model('Instruction', instrukcijaShema, 'Instructions');