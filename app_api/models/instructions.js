const mongoose = require('mongoose');

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0},
  datum: { type: Date, required: true },
  ura: { type: String, required: true},
  steviloProstihMest: { type: Number, required: true},
  idInstruktorja: { type: String, required: true}
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');