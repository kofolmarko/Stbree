const mongoose = require('mongoose');

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: Number,
  datum: { type: Date, required: true },
  steviloProstihMest: Number
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');


