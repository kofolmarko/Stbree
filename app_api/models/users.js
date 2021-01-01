const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
//const Job = mongoose.model('Job');

/**
 * ShemeUporabnika
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     ime:
 *      type: string
 *     priimek:
 *      type: string
 *     email:
 *      type: string
 *     zgoscenaVrednost:
 *      type: string
 *     nakljucnaVrednost:
 *      type: string
 *     statusInstruktorja:
 *      type: boolean
 *     datumVpisa:
 *      type: date
 *     opis:
 *      type: string
 *     telefonskaStevilka:
 *      type: number
 *     ocena:
 *      type: number
 *     ocen:
 *      type: array
 *      items: 
 *        type: Ocena
 *     dogodki:
 *      type: array
 *      items: 
 *        type: InstrukcijeDogodek
 *     dela:
 *      type: array
 *      items: 
 *        type: Delo
 *     poslanaSporocila:
 *      type: array
 *      items: 
 *        type: Sporocila
 *     kontakti:
 *      type: array
 *      items:
 *        type: string
 *    required:
 *     - ime
 *     - priimek
 *     - email
 *     - zgoscenaVrednost
 *     - nakljucnaVrednost
 *   InstrukcijeDogodek:
 *    type: object
 *    properties:
 *     naziv:
 *      type: string
 *     opis:
 *      type: string
 *     cena:
 *      type: number
 *     datum:
 *      type: date
 *     ura:
 *      type: string
 *     steviloProstihMest:
 *      type: number
 *     emailInstruktorja:
 *      type: string
 *    required:
 *     - naziv
 *     - opis
 *     - datum
 *     - ura
 *     - steviloProstihMest
 *     - emailInstruktorja
 *   Delo:
 *      type: object
 *      properties:
 *        naziv:
 *          type: string
 *        opis:
 *          type: string
 *        cena:
 *          type: number
 *        datum:
 *          type: date
 *        emailPonudnika:
 *          type: string
 *        zasedeno:
 *          type: boolean
 *      required:
 *        - naziv
 *        - opis
 *        - datum
 *        - emailPonudnika
 */

const sporocilaShema = new mongoose.Schema({
  prejemnikSporocila: { type: String },
  besedilo: "String",
  cas: { type: Date, "default": Date.now }
});

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  emailPonudnika: { type: String, required: true },
  zasedeno: { type: Boolean, "defauld": false }
});

const instrukcijeDogodekShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: { type: Number, "default": 0 },
  datum: { type: Date, required: true },
  ura: { type: String, required: true },
  steviloProstihMest: { type: Number, required: true },
  emailInstruktorja: { type: String, required: true }
});

const uporabnikZacetnoShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, reuired: true },
  email: { type: String, unique: true, required: true },
  zgoscenaVrednost: { type: String, required: true },
  nakljucnaVrednost: { type: String, required: true },
  statusInstruktorja: { type: Boolean, "default": false },
  datumVpisa: { type: Date, "default": Date.now },
  opis: { type: String, "default": "Vnesite opis" },
  telefonskaStevilka: { type: Number, "default": 0 },
  ocena: { type: Number, "default": 0 },
  ocen: { type: Array, "default": [] },
  dogodki: [instrukcijeDogodekShema],
  dela: [deloShema],
  poslanaSporocila: [sporocilaShema],
  kontakti: [{ type: String }],
});

uporabnikZacetnoShema.methods.nastaviGeslo = function (geslo) {
  this.nakljucnaVrednost = crypto.randomBytes(16).toString('hex');
  this.zgoscenaVrednost = crypto
    .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
    .toString('hex');
};

uporabnikZacetnoShema.methods.preveriGeslo = function (geslo) {
  let zgoscenaVrednost = crypto
    .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
    .toString('hex');
  return this.zgoscenaVrednost == zgoscenaVrednost;
};

uporabnikZacetnoShema.methods.generirajJwt = function () {
  const datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  console.log(this);

  return jwt.sign({
    email: this.email,
    ime: this.ime,
    priimek: this.priimek,
    statusInstruktorja: this.statusInstruktorja,
    exp: parseInt(datumPoteka.getTime() / 1000, 10)
  }, process.env.JWT_GESLO);
};

mongoose.model('User', uporabnikZacetnoShema, 'Users');


// db.Users.save({
//     ime : "Sara",
//     email : "sara@gmail.com",
//     geslo : "12345678"
//   }
// )

// db.Users.update({
//   ime: 'Nejc'
// }, {
//   $push: {
//     kontakti: 
//       "5fe9cb2f2143640012e45367"
//   }
// })



// db.Users.update({ime: "Nejc"}, {$unset: {poslanaSporocila:1}}, false, true);

// db.Users.update({
//   ime: 'Nejc'
// }, {
//   $push: {
//     poslanaSporocila: {
//       _id: ObjectId(),
//       prejemnikSporocila: "5feb41f231351f0012aa1ee0",
//       besedilo: "zivjo sara, nejc tuki!",
//       cas: "2018-12-17T13:45:00.000Z"
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


// db.Users.save({
//   "ime" : "Irena",
//   "priimek" : "Zagar",
//   "email" : "irena@gmail.com",
//   "geslo" : "12345678",
//   "poslanaSporocila" : [
//             {
//                     "_id" : ObjectId(),
//                     "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
//                     "besedilo" : "zivjo manca",
//                     "cas" : "2018-12-10T13:45:00.000Z"
//             },
//             {
//                     "_id" : ObjectId(),
//                     "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
//                     "besedilo" : "kako si kej manca?",
//                     "cas" : "2018-12-13T13:45:00.000Z"
//             },
//             {
//                     "_id" : ObjectId(),
//                     "prejemnikSporocila" : "5fdb92b4ad6eda4266f989c2",
//                     "besedilo" : "hey tine its manca",
//                     "cas" : "2018-12-13T13:45:00.000Z"
//             }
//     ],
//     "kontakti" :
//     [
//             "5fdb92a2ad6eda4266f989c1",
//             "5fdb92b4ad6eda4266f989c2"
//     ]
//   }
// )



// db.Users.deleteOne(
//   { ime : "Sara" } 
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
// {
//   "_id" : ObjectId("5fdb92a2ad6eda4266f989c1"),
//   "ime" : "Manca",
//   "priimek" : "Zagar",
//   "email" : "manca@gmail.com",
//   "geslo" : "12345678",
//   "poslanaSporocila" : [
//           [
//                   {
//                           "_id" : ObjectId("5fdb954aad6eda4266f989c6"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "zivjo irena",
//                           "cas" : "2018-12-11T13:45:00.000Z"
//                   },
//                   {
//                           "_id" : ObjectId("5fdb954aad6eda4266f989c7"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "super sem, pa ti irena?",
//                           "cas" : "2018-12-14T13:45:00.000Z"
//                   },
//                   {
//                           "_id" : ObjectId("5fdb954aad6eda4266f989c8"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "hey irenca zkaj ne odgovarjas?",
//                           "cas" : "2018-12-15T13:45:00.000Z"
//                   }
//           ]
//   ],
//   "kontakti" : [
//           [
//                   "5fdb8e3aad6eda4266f989c0"
//           ]
//   ]
// }
// {
//   "_id" : ObjectId("5fdb92b4ad6eda4266f989c2"),
//   "ime" : "Tine",
//   "priimek" : "Zagar",
//   "email" : "tine@gmail.com",
//   "geslo" : "12345678",
//   "poslanaSporocila" : [
//           [
//                   {
//                           "_id" : ObjectId("5fdb963fad6eda4266f989c9"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "zivjo irena danes sem pisal petko!",
//                           "cas" : "2018-12-12T13:45:00.000Z"
//                   },
//                   {
//                           "_id" : ObjectId("5fdb963fad6eda4266f989ca"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "ne nisi manca nehi me zajebavat irena!!",
//                           "cas" : "2018-12-15T13:45:00.000Z"
//                   },
//                   {
//                           "_id" : ObjectId("5fdb963fad6eda4266f989cb"),
//                           "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
//                           "besedilo" : "hey irenca nisem tako mislil, prid nazaj i miss you",
//                           "cas" : "2018-12-16T13:45:00.000Z"
//                   },
//                   {
//                           "_id" : ObjectId("5fdb963fad6eda4266f989cc"),
//                           "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
//                           "besedilo" : "manca pogresam te...",
//                           "cas" : "2018-12-16T13:45:00.000Z"
//                   }
//           ]
//   ],
//   "kontakti" : [
//           [
//                   "5fdb8e3aad6eda4266f989c0",
//                   "5fdb92a2ad6eda4266f989c1"
//           ]
//   ]
// }
// {
//   "_id" : ObjectId("5fdb9c490108009c21fa0c01"),
//   "ime" : "Irena",
//   "priimek" : "Zagar",
//   "email" : "irena@gmail.com",
//   "geslo" : "12345678",
//   "poslanaSporocila" : [
//           {
//                   "_id" : ObjectId("5fdb9c490108009c21fa0bfe"),
//                   "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
//                   "besedilo" : "zivjo manca",
//                   "cas" : "2018-12-10T13:45:00.000Z"
//           },
//           {
//                   "_id" : ObjectId("5fdb9c490108009c21fa0bff"),
//                   "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
//                   "besedilo" : "kako si kej manca?",
//                   "cas" : "2018-12-13T13:45:00.000Z"
//           },
//           {
//                   "_id" : ObjectId("5fdb9c490108009c21fa0c00"),
//                   "prejemnikSporocila" : "5fdb92b4ad6eda4266f989c2",
//                   "besedilo" : "hey tine its manca",
//                   "cas" : "2018-12-13T13:45:00.000Z"
//           }
//   ],
//   "kontakti" : [
//           "5fdb92a2ad6eda4266f989c1",
//           "5fdb92b4ad6eda4266f989c2"
//   ]
// }