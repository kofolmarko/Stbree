const mongoose = require('mongoose');

const uporabnikShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  email: { type: String, required: true },
  geslo: { type: String, required: true },
  statusInstruktorja: { type: Boolean, "default": false },
  datumVpisa: { type: Date, "default": Date.now },
  opis: String,
  slika: String, //slika: {type: Slika, "default": "/mapa"}
  telefonskaStevilka: [Number],
  ocena: { type: Number, "default": 0, min: 0, max: 5 }
});

const uporabnikObveznostViewShema = new mongoose.Schema({
  stevilka: {type: Number, required: true},
  dogodek: {type: String, required: true},
  datum: {type: String, required: true}
});

const uporabnikViewShema = new mongoose.Schema({
  delo: [uporabnikObveznostViewShema],
  instrukcija: [uporabnikObveznostViewShema]
});

const uporabnikUserObvestiloShema = new mongoose.Schema({
  stevilka: {type: Number, required: true},
  dogodek: {type: String, required: true},
  datum: {type: Date, "default": Date.now}, //datum spremembe ali?
  povezava: {type: String, required: true} 
});

const uporabnikUserShema = new mongoose.Schema({
  objava: [uporabnikObveznostViewShema],
  obvestila: [uporabnikUserObvestiloShema]
});

mongoose.model('User', uporabnikShema, 'Users');