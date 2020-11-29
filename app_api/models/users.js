const mongoose = require('mongoose');
const uporabnikObveznostShema = new mongoose.Schema({
  stevilka: {type: Number},
  dogodek: {type: String},
  datum: {type: String}
});

const uporabnikViewShema = new mongoose.Schema({
  delo: [uporabnikObveznostShema],
  instrukcija: [uporabnikObveznostShema]
});

const uporabnikUserObvestiloShema = new mongoose.Schema({
  stevilka: {type: Number},
  dogodek: {type: String},
  datum: {type: Date, "default": Date.now}, //datum spremembe ali?
  povezava: {type: String} 
});

const uporabnikUserShema = new mongoose.Schema({
  objava: [uporabnikObveznostShema],
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
  slika: String, 
  telefonskaStevilka: [Number],
  ocena: { type: Number, "default": 0, min: 0, max: 5 },
  mojProfil: {type: uporabnikUserShema},
  viewProfil: {type: uporabnikViewShema}
});

mongoose.model('User', uporabnikShema, 'Users');

/*
db.Users.save({ 
    ime: 'Petfddsra',
    priimek: 'Kudsfralt',
    email: 'pkfd@gmail.com',
    geslo: 'ljubimsfdfaro888',
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
  