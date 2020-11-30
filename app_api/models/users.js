const mongoose = require('mongoose');

//const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
//const Job = mongoose.model('Job');


const sporocilaShema = new mongoose.Schema({
  prejemnikSporocila: { type: String},
  besedilo: "String",
  cas: { type: Date, "default": Date.now }
});

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: Number,
  datum: { type: Date, required: true }
});

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0},
  datum: { type: Date, required: true },
  ura: { type: String, required: true},
  steviloProstihMest: { type: Number, required: true},
  idInstruktorja: { type: String, required: true}
});

const uporabnikZacetnoShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  email: { type: String, required: true },
  geslo: { type: String, required: true },
  statusInstruktorja: { type: Boolean, "default": false },
  datumVpisa: { type: Date, "default": Date.now },
  dogodki: [instrukcijeDogodekShema],
  dela: [deloShema],
  poslanaSporocila: [sporocilaShema],
  opis: {type: String, "default": "Vnesite opis"},
  telefonskaStevilka: {type: Number, "default": ""},
});


mongoose.model('User', uporabnikZacetnoShema, 'Users');