const mongoose = require('mongoose');
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
  ocena: { type: Number, "default": 0, min: 0, max: 5 },
  mojProfil: {type: uporabnikUserShema},
  viewProfil: {type: uporabnikViewShema}
});

mongoose.model('User', uporabnikShema, 'Users');

/*
db.User.save({ 
    ime: 'Petra',
    priimek: 'Kuralt',
    email: 'pk@gmail.com',
    geslo: 'ljubimsaro888',
    statusInstruktorja: false,
    opis: 'ponavadi procrastinatam',
    telefonskaStevilka: 89767,
    ocena: 5,
  
    mojProfil: {
      objava: {
      stevilka: 1,
        dogodek: 'sp party',
        datum: '27.11', 
      },
      obvestila: {
      stevilka: 1,
        dogodek: 'imas sporocilo od myonelovesara',
        povezava: '#', 
      
      }
  }
  });
 */
  