const mongoose = require('mongoose');

const komentarjiShema = new mongoose.Schema({
  avtor: {type: String, required: true},
  ocena: {type: Number, required: true, min: 0, max: 5},
  besediloKomentarja: {type: String, required: true},
  datum: {type: Date, "default": Date.now}
});

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0},
  datum: { type: Date, required: true },
  ura: { type: String, required: true},
  steviloProstihMest: { type: Number, required: true},
  emailInstruktorja: { type: String, required: true},
  komentarji: [komentarjiShema]
});

mongoose.model('InstrukcijeDogodek', instrukcijeDogodekShema, 'InstrukcijeDogodki');
mongoose.model('Komentar', komentarjiShema, 'Komentarji');
