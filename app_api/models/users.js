const mongoose = require('mongoose');

const uporabnikDodatnoShema = new mongoose.Schema({
  opis: String,
  telefonskaStevilka: [Number],
  ocena: { type: Number, "default": 0, min: 0, max: 5 }
});

const sporocilaShema = new mongoose.Schema({
  avtorSporocila: { type: String},
  prejemnikSporocila: { type: String},
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


// curl -X POST \
//        -d "naziv=Donald Trump&ocena=4&komentar=Najbolje je, da v puščavi tudi prespite in si v beduinskem kampu privoščite pravo gostijo ob večernem ognju." \
//        -H "Content-Type: application/x-www-form-urlencoded" \
//        http://localhost:3000/api/lokacije/5facd832e8a71e43d2895abb/komentarji



// curl -X POST \
//         -d "avtorSporocila=Sara&prejemnikSporocila=Tinna&besedilo=danes je pa lep soncek" \
//         -H "Content-Type: application/x-www-form-urlencoded" \
//         http://localhost:3000/api/chat/5fc14f9daf2e68b8e78909e7