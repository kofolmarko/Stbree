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


// db.Users.save({
//     ime : "Sara",
//     priimek : "Alesi",
//     email : "sara@gmail.com",
//     geslo : "sara123",
//     poslanaSporocila : [{
//             "_id" : ObjectId("5fc0ccb0e20cb147bcfb0a39"),
//             "avtorSporocila" : "Sara",
//             "prejemnikSporocila" : "Mato",
//             "besedilo" : "zivjo mato, jaz sem sara"
//     },{
//       "_id" : ObjectId("5fc0ccb0e20cb147bcfb0a39"),
//             "avtorSporocila" : "Sara",
//             "prejemnikSporocila" : "Domen",
//             "besedilo" : "zivjo domen, jaz sem sara"
//     },{
//       "_id" : ObjectId("5fc0ccb0e20cb147bcfb0a39"),
//             "avtorSporocila" : "Sara",
//             "prejemnikSporocila" : "Petra",
//             "besedilo" : "zivjo petra, jaz sem sara in te ljubim"
//     }
//   ]
//   }
// )