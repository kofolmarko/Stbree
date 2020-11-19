const mongoose = require('mongoose');

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: Number,
  datum: { type: Date, required: true },
  ura: { type: mongoose.Schema.Types.Mixed, required: true },
  prostaMesta: Number
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');

//module.exports = mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');