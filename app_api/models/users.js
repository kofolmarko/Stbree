const mongoose = require('mongoose');

const uporabnikDodatnoShema = new mongoose.Schema({
  opis: String,
  telefonskaStevilka: [Number],
  ocena: { type: Number, "default": 0, min: 0, max: 5 }
});

const sporocilaShema = new mongoose.Schema({
  avtorSporocila: { type: String, required: true },
  prejemnikSporocila: { type: String, required: true },
  besedilo: "String",
  cas: { type: Date, "default": Date.now }
});    

const uporabnikZacetnoShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  email: { type: String, required: true },
  geslo: { type: String, required: true },
  statusInstruktorja: { type: Boolean, "default": false },
  datumVpisa: { type: Date, "default": Date.now },
  dodatniPodatki: [uporabnikDodatnoShema],
  poslanaSporocila: [sporocilaShema]
});



mongoose.model('User', uporabnikZacetnoShema, 'Users');