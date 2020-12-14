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
  opis: {type: String, "default": "Vnesite opis"},
  telefonskaStevilka: {type: Number, "default": 0},
  ocena: {type: Number, "default": 0},
  ocen: {type: Array, "default": []},
  dogodki: [instrukcijeDogodekShema],
  dela: [deloShema],
  poslanaSporocila: [sporocilaShema],
});


mongoose.model('User', uporabnikZacetnoShema, 'Users');


// db.Users.save({
//     ime : "Sara",
//     email : "sara@gmail.com",
//     geslo : "sara123"
//   }
// )


//  db.Users.update({
//   ime: 'Ticica'
// }, {
//   $push: {
//     poslanaSporocila: {
//       _id: ObjectId(),
//       prejemnikSporocila: "5fcb7bab7ebc692d6cc1b556",
//       besedilo: "zivjo spela prticica tukaj prvic",
//       //cas: 2020-12-04T13:01:46.372Z 
//     }
//   }
// })


// curl -X POST \
//        -d "naziv=Donald Trump&ocena=4&komentar=Najbolje je, da v puščavi tudi prespite in si v beduinskem kampu privoščite pravo gostijo ob večernem ognju." \
//        -H "Content-Type: application/x-www-form-urlencoded" \
//        http://localhost:3000/api/lokacije/5facd832e8a71e43d2895abb/komentarji



// curl -X POST \
//         -d "avtorSporocila=Rihard&prejemnikSporocila=Tinna&besedilo=danes je oblacno" \
//         -H "Content-Type: application/x-www-form-urlencoded" \
//         http://localhost:3000/api/chat/5fc294d9d646ff1642bdeed3


// db.Users.save(
//   {
//   ime: "Manca",
//   priimek: "Zagar",
//   email:  "rh@hgufg.com",
//   geslo: "mancabanana",
//   poslanaSporocila:[
//     {
//       prejemnikSporocila: "Tine",
//       besedilo: "zivjo tine manca tukii hihihihihihi",
//     },
//     {
//       prejemnikSporocila: "Spela",
//       besedilo: "zivjo spela manca tukii",
//     }
//   ]
//   }
// )



// db.Users.deleteOne(
//   { ime : "Mato" } 
// )

//db.inventory.deleteOne( { status: "D" } )

// { item: "journal", 
// instock: [ 
//   { warehouse: "A", qty: 5 }, 
//   { warehouse: "C", qty: 15 } 
// ] 
// },
// find(  {  $and:[ { _id: imeUserja}, {"poslanaSporocila": {prejemnikSporocila:"imePrejemnika"}} ]  }) 
// find( { "instock": { warehouse: "A", qty: 5 }         } )

// $or:[{region: "NA"},{sector:"Some Sector"}]
