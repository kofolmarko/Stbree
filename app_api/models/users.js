const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
//const Job = mongoose.model('Job');

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        ime:
 *          type: string
 *        priimek:
 *          type: string
 *        email:
 *          type: string
 *        zgoscenaVrednost:
 *          type: string
 *        nakljucnaVrednost:
 *          type: string
 *        statusInstruktorja:
 *          type: boolean
 *        datumVpisa:
 *          type: date
 *        opis:
 *          type: string
 *        telefonskaStevilka:
 *          type: number
 *        ocena:
 *          type: number
 *        ocen:
 *          type: array
 *        items: 
 *          type: Ocena
 *          dogodki:
 *            type: array
 *            items: 
 *              type: InstrukcijeDogodek
 *          dela:
 *            type: array
 *            items: 
 *              type: Delo
 *          poslanaSporocila:
 *            type: array
 *            items: 
 *              type: Sporocila
 *          kontakti:
 *            type: array
 *            items:
 *              type: string
 *        required:
 *          - ime
 *          - priimek
 *          - email
 *          - zgoscenaVrednost
 *          - nakljucnaVrednost
 *    ProfilBranjePovzetek:
 *      description: Podatki profila pri branju
 *      type: object
 *      properties:
 *        _id: 
 *          type: string
 *          format: uuid
 *          description: enolični identifikator
 *          example: 5ff1089501e1920011abf9fc
 *        ime:
 *          type: string
 *          example: Harry
 *        priimek:
 *          type: string
 *          example: Potter
 *        email:
 *          type: string
 *          example: hp@hogwarts.com
 *        zgoscenaVrednost:
 *          type: string
 *          example: 72a22c595997e002b83d2a34889f4b7a3daec18b1d6394deadd69c13854c42e4cda7dd...
 *        nakljucnaVrednost:
 *          type: string
 *          example: fbdfd5a5491c65861466040212b174bd  
 *        statusInstruktorja:
 *          type: boolean
 *          example: true
 *        datumVpisa:
 *          type: date
 *          example: 2021-11-08
 *        opis:
 *          type: string
 *          example: Obvladujem DADA
 *        telefonskaStevilka:
 *          type: number
 *          example: 073345554
 *        ocena:
 *          type: number
 *          example: 5
 *        ocen:
 *          type: array
 *          items: 
 *            type: Ocena
 *            example:
 *              - 5
 *              - 4
 *        dogodki:
 *          type: array
 *          items: 
 *            type: InstrukcijeDogodek
 *        dela:
 *          type: array
 *          items: 
 *            type: Delo
 *        poslanaSporocila:
 *          type: array
 *          items: 
 *            type: Sporocila
 *        kontakti:
 *          type: array
 *        items:
 *          type: string
 *      required:
 *        - ime
 *        - priimek
 *        - email
 *        - zgoscenaVrednost
 *        - nakljucnaVrednost
 *    ProfilAzuriranjePovzetekZahteva:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: rw@hogwarts.com
 *        statusInstruktorja:
 *          type: boolean
 *          example: true
 *        opis:
 *          type: string
 *          example: Obvladujem DADA
 *        telefonskaStevilka:
 *          type: number
 *          example: 073345554
 *      required:
 *        - ime
 *        - priimek
 *        - email
 *    ProfilAzuriranjePovzetekOdgovor:
 *      type: object
 *      properties:
 *        _id: 
 *          type: string
 *          format: uuid
 *          description: enolični identifikator
 *          example: 5ff1089501e192001abf9fc
 *        ime:
 *          type: string
 *          example: Harry
 *        priimek:
 *          type: string
 *          example: Potter
 *        email:
 *          type: string
 *          example: hp@hogwarts.com 
 *        statusInstruktorja:
 *          type: boolean
 *          example: true
 *        datumVpisa:
 *          type: date
 *          example: 2021-11-08
 *        opis:
 *          type: string
 *          example: Obvladujem DADA
 *        telefonskaStevilka:
 *          type: number
 *          example: 073345554
 *   KontaktiBranje:
 *    type: object
 *    properties:
 *     pridobljeniKontakti:
 *      type: array
 *      items:
 *       type: User
 *      example:
 *       - statusInstruktorja: false
 *         opis: Novo pečeni uporabnik.
 *         telefonskaStevilka: 0
 *         ocena: 0
 *         ocen: []
 *         kontakti: []
 *         id: 5fe9cb2f2143640012e45367
 *         datumVpisa: 2020-12-28T12:10:23.533Z
 *         dogodki: []
 *         dela: []
 *         poslanaSporocila: []
 *         ime: Irena
 *         priimek: Novak
 *         email: irena@gmail.com 
 *         nakljucnaVrednost: 0eca1450e9c809df3086ea2c42058ab2
 *         zgoscenaVrednost: b0bee9de817af7c3813abe1b3e55aa47c19f5f8490dd1c78eaaafcf3a4b66226d10d0dd389a04b20215dd9e62889bd164617d7c19196ed8732acd0951b90f81f
 *   SporocanjeAzuriranjePovzetekZahteva:
 *    type: object
 *    properties:
 *     prejemnikSporocila:
 *      type: string
 *      example: 5ff0fb88879cc87a850bca40
 *     besedilo:
 *      type: string
 *      example: Zivjo Lana, kako si?
 *   SporocanjeAzuriranjePovzetekOdgovor:
 *      type: object
 *      properties:
 *        besedilo:
 *          type: string
 *          example: Zivjo Lana, kako si?
 *   SporocilaBranje:
 *      type: object
 *      properties:
 *        prviUser:
 *          type: User
 *          example:
 *           - statusInstruktorja: false
 *             opis: Novo pečeni uporabnik.
 *             telefonskaStevilka: 0
 *             ocena: 0
 *             ocen: []
 *             kontakti: []
 *             id: 5fe9cb2f2143640012e45367
 *             datumVpisa: 2020-12-28T12:10:23.533Z
 *             dogodki: []
 *             dela: []
 *             poslanaSporocila: []
 *             ime: Irena
 *             priimek: Novak
 *             email: irena@gmail.com 
 *             nakljucnaVrednost: 0eca1450e9c809df3086ea2c42058ab2
 *             zgoscenaVrednost: b0bee9de817af7c3813abe1b3e55aa47c19f5f8490dd1c78eaaafcf3a4b66226d10d0dd389a04b20215dd9e62889bd164617d7c19196ed8732acd0951b90f81f
 *        drugiUser:
 *          type: User
 *          example:
 *           - statusInstruktorja: false
 *             opis: Novo pečeni uporabnik.
 *             telefonskaStevilka: 0
 *             ocena: 0
 *             ocen: []
 *             kontakti: []
 *             id: 5fe9cb2f2143640012e45367
 *             datumVpisa: 2020-12-28T12:10:23.533Z
 *             dogodki: []
 *             dela: []
 *             poslanaSporocila: []
 *             ime: Spela
 *             priimek: Ahlin
 *             email: spela@gmail.com 
 *             nakljucnaVrednost: 3142808586fb46fdc239990a2c21b0a7
 *             zgoscenaVrednost: aa40d868f6a6e7c435c610ff65d0d05ab33a23ab6e4340f09efb77db579b032310344c2ed1746528e1e12c03e9c2dd822fc1b671f6217441c5e958b88efd971b
 *   KontaktAzuriranjePovzetekOdgovor:
 *      type: object
 *      properties:
 *        kontakt:
 *          type: string
 *          example: 5ff0deac3c71c55cd8206bf6
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
//       "5fefc949a623e75c9d35be29"
      
//   }
// })


 //db.Users.update({ime: "Oli"}, {$unset: {poslanaSporocila:1}}, false, true);
 //db.Users.update({ime: "Oli"}, {$unset: {kontakti:1}}, false, true);

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

/**
 * @swagger
 *  components:
 *   examples:
 *    NiProfila:
 *     summary: ne najdem profila
 *     value:
 *      sporočilo: Ne najdem profila.
 *    NiZetona:
 *     summary: ni JWT žetona
 *     value:
 *      sporočilo: "UnauthorizedError: No authorization token was found."
 */