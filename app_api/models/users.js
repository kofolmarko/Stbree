const mongoose = require('mongoose');
const instrukcijeDodatekShema =require('./instructions');
const deloShema = require('./jobs');
/*
const uporabnikDodatnoShema = new mongoose.Schema({
  opis: String,
  telefonskaStevilka: [Number],
  ocena: { type: Number, "default": 0, min: 0, max: 5 }
});
*/
const uporabnikZacetnoShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  opis: {type: String, "default": ""},
  telefonskaStevilka: {type: String, "default": ""},
  ocena: {type: Number, "default": 5},
  email: { type: String, required: true },
  geslo: { type: String, required: true },
  statusInstruktorja: { type: Boolean, "default": false },
  datumVpisa: { type: Date, "default": Date.now },
  dogodki: [instrukcijeDodatekShema],
  dela: [deloShema]
});


mongoose.model('User', uporabnikZacetnoShema, 'Users');