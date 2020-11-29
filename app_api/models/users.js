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
//     email : "sara@gmail.com",
//     geslo : "sara123"
//   }
// )


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
//   ime: "Rihard",
//   priimek: "Kuralt",
//   email:  "rh@hgufg.com",
//   geslo: "rihard"
//   }
// )



// db.Users.deleteOne(
//   { ime : "Mato" } 
// )



// const dodajKomentar = (req, res, lokacija) => {
//   if (!lokacija) {
//     res.status(404).json({"sporočilo": "Ne najdem lokacije."});
//   } else {
//     lokacija.komentarji.push({
//       avtor: req.body.naziv,
//       ocena: req.body.ocena,
//       besediloKomentarja: req.body.komentar
//     });
//     lokacija.save((napaka, lokacija) => {
//       if (napaka) {
//         res.status(400).json(napaka);
//       } else {
//         posodobiPovprecnoOceno(lokacija._id);
//         const dodaniKomentar = lokacija.komentarji.slice(-1).pop();
//         res.status(201).json(dodaniKomentar);
//       }
//     });
//   }
// };