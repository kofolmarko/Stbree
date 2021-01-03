
const mongoose = require('mongoose');
const User = mongoose.model('User');

//////////////////////// g e t  k o n t a k t e  ////////////////////////

const naloziKontakte = (req, res) => {
    User
      .findOne({ email: req.params.emailUporabnika })
      .exec((napaka, user) => {
        if(!user) {
          return res.status(404).json({
            "sporočilo": 
            "Ne najdem uporabnika."
          });
        } else if(napaka) {
          return res.status(500).json(napaka);
        }else {
          User.find().where('_id').in(user.kontakti)
          .exec((napaka, pridobljeniKontakti) => {
            
            if (!pridobljeniKontakti) {
              return res.status(404).json({
                "sporočilo": 
                "Ne najdem kontaktov uporabnika."
              });
            } else if (napaka) {
              return res.status(500).json(napaka);
            }
            res.status(200).json({
              "pridobljeniKontakti": pridobljeniKontakti
            })
          })
          }
      }
    )
};    

//////////////////////// g e t  s p o r o c i l a ////////////////////////

const naloziSporocilaKontakta = (req, res) => {
  User
       .find({ $or:
      [
        { email: req.params.emailUporabnika},
        { _id: req.params.idPrejemnika}
      ]})
      .exec((napaka, users) => {
        if(!users) {
          return res.status(404).json({
            "sporočilo": 
            "Ne najdem kliknenega kontakta."
          });
        }else if(napaka) {
          return res.status(500).json(napaka);
        }else {

          //jaz sem users[0]
          if(users[0]._id == req.params.idUserja) {   
            res.status(200).json({
            "prviUser":users[0],
            "drugiUser": users[1]
            })
          }else{    //jaz sem users[1]
            res.status(200).json({
              "prviUser":users[1],
              "drugiUser": users[0]
              })
          }

        }
        })
}

//////////////////////// d o d a j  s p o r o c i l o  m e t o d a ////////////////////////

const dodajSporocilo = (req, res, uporabnik) => {
  // console.log("req.body.prejemnikSporocila " + req.body.prejemnikSporocila);
  // console.log("req.body.besedilo " + req.body.besedilo);
  // console.log("uporabnik****" + uporabnik);
  //console.log("req.body.prejemnikSporocila " + req.body.prejemnikSporocila);
  //console.log("req.body.besedilo " + req.body.besedilo);
  //console.log("uporabnik****" + uporabnik);
  if (!uporabnik) {
    res.status(404).json({"sporočilo": "Ne najdem uporabnika."});
  } else {
    uporabnik.poslanaSporocila.push({
      prejemnikSporocila: req.body.prejemnikSporocila,
      besedilo: req.body.besedilo
    });

    uporabnik.save((napaka, uporabnik) => {
      if (napaka) {
        res.status(400).json(napaka);
      } else {
        const dodanoSporocilo = uporabnik.poslanaSporocila.slice(-1).pop();
        res.status(201).json(dodanoSporocilo.besedilo);
      }
    });
  }
};


//////////////////////// p o s t  s p o r o c i l o ////////////////////////

  const kreirajSporocilo = (req, res) => {
    const idEmail = req.params.emailUporabnika;
    // console.log("idEmail " + idEmail);
    // console.log("req.body.besedilo " + req.body.besedilo);
    //console.log("idEmail " + idEmail);
    //console.log("req.body.besedilo " + req.body.besedilo);

    if (idEmail) {
      User
        .findOne({ email: idEmail })
        //.findById(req.params.emailUporabnika)
        //.select('poslanaSporocila')
        .exec((napaka, uporabnik) => {
          if (napaka) {
            res.status(400).json(napaka);
          } else {
           dodajSporocilo(req, res, uporabnik);
          }
        });
    } else {
      res.status(400).json({
        "sporočilo": 
          "Ne najdem uporabnika, idUporabnika je obvezen parameter."
      });
    }
  };

//////////////////////// d o d a j  k o n t a k t  m e t o d a ////////////////////////
const dodajKontakt = (req, res, uporabnik) => {
 
  if (!uporabnik) {
    res.status(404).json({"sporočilo": "Ne najdem uporabnika."});
  } else if(req.params.emailKontakta){
    User
    .findOne({ email: req.params.emailKontakta })
    .exec((napaka, kontakt) => {
      if (napaka) {
        res.status(400).json(napaka);
      } else {
   
        uporabnik.kontakti.unshift(
          kontakt._id
         );
     
         uporabnik.save((napaka, uporabnik) => {
           if (napaka) {
             res.status(400).json(napaka);
           } else {
            //const dodanKontakt = uporabnik.kontakti.slice(-1).pop();
            const dodanKontakt = uporabnik.kontakti.shift();
             res.status(201).json(dodanKontakt);
           }
         });
      }

    });
  } else {
    res.status(400).json({
      "sporočilo": 
        "Ne najdem kontakta, emailKontakta je obvezen parameter."
    });
  }
};

//////////////////////// p o s t  k o n t a k t ////////////////////////

const kreirajKontakt = (req, res) => {
  const idEmail = req.params.emailUporabnika;

  // console.log("idEmail " + idEmail);
  // console.log("req.params.emailKontakta" + req.params.emailKontakta);

  if (idEmail) {
    User
      .findOne({ email: idEmail })

      .exec((napaka, uporabnik) => {
        if (napaka) {
          res.status(400).json(napaka);
        } else {
         
         dodajKontakt(req, res, uporabnik);
        }
      });
  } else {
    res.status(400).json({
      "sporočilo": 
        "Ne najdem uporabnika, emailUporabnika je obvezen parameter."
    });
  }
};


//////////////////////// p u t  s p o r o c i l o ////////////////////////

// const preurediSporocilo = (req, res) => {
//   User
//     .findById(req.params.idUserja)
//     .select('poslanaSporocila')
//     .exec((napaka, uporabnikovaSporocila) => {

//       if(!uporabnikovaSporocila){
//         return res.status(404).json({"sporočilo": "ne najdem uporabinka youre dumb af"});
//       }else if(napaka){
//         return res.status(500).json(napaka);
//       }

//       if(uporabnikovaSporocila.poslanaSporocila && uporabnikovaSporocila.poslanaSporocila.length > 0){
//         const trenutnoSporocilo = req.body.idSporocila;
//       }if(!trenutnoSporocilo){
//         return res.status(404).json({"sporočilo": "Ne najdem sporocila."});
//       }else{
//         trenutnoSporocilo.prejemnikSporocila = req.body.prejemnikSporocila;
//         trenutnoSporocilo.besedilo = req.body.besedilo;
//       }

//       uporabnikovaSporocila.save((napaka, uporabnikovaSporocila)=>{
//         if(napaka){
//           return res.status(404).json(napaka);
//         }else{
//           res.status(200).json(trenutnoSporocilo);
//         }
//       })
      
//     })
// }

const insertAll = (req, res) => {
  User
  .create({
    "_id" : ("5fdb92a2ad6eda4266f989c1"),
    "ime" : "Manca",
    "priimek" : "Zagar",
    "email" : "manca@gmail.com",
    "geslo" : "12345678",
    "poslanaSporocila" : [
            [
                    {
                            "_id" : ("5fdb954aad6eda4266f989c6"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "zivjo irena",
                            "cas" : "2018-12-11T13:45:00.000Z"
                    },
                    {
                            "_id" : ("5fdb954aad6eda4266f989c7"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "super sem, pa ti irena?",
                            "cas" : "2018-12-14T13:45:00.000Z"
                    },
                    {
                            "_id" : ("5fdb954aad6eda4266f989c8"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "hey irenca zkaj ne odgovarjas?",
                            "cas" : "2018-12-15T13:45:00.000Z"
                    }
            ]
    ],
    "kontakti" : 
            [
                    "5fdb8e3aad6eda4266f989c0"
            ]
  },
  {
    "_id" : ("5fdb92b4ad6eda4266f989c2"),
    "ime" : "Tine",
    "priimek" : "Zagar",
    "email" : "tine@gmail.com",
    "geslo" : "12345678",
    "poslanaSporocila" : [
            [
                    {
                            "_id" : ("5fdb963fad6eda4266f989c9"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "zivjo irena danes sem pisal petko!",
                            "cas" : "2018-12-12T13:45:00.000Z"
                    },
                    {
                            "_id" : ("5fdb963fad6eda4266f989ca"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "ne nisi manca nehi me zajebavat irena!!",
                            "cas" : "2018-12-15T13:45:00.000Z"
                    },
                    {
                            "_id" : ("5fdb963fad6eda4266f989cb"),
                            "prejemnikSporocila" : "5fdb8e3aad6eda4266f989c0",
                            "besedilo" : "hey irenca nisem tako mislil, prid nazaj i miss you",
                            "cas" : "2018-12-16T13:45:00.000Z"
                    },
                    {
                            "_id" : ("5fdb963fad6eda4266f989cc"),
                            "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
                            "besedilo" : "manca pogresam te...",
                            "cas" : "2018-12-16T13:45:00.000Z"
                    }
            ]
    ],
    "kontakti" :
            [
                    "5fdb8e3aad6eda4266f989c0",
                    "5fdb92a2ad6eda4266f989c1"
            ]
  },
  {
    "_id" : ("5fdb9c490108009c21fa0c01"),
    "ime" : "Irena",
    "priimek" : "Zagar",
    "email" : "irena@gmail.com",
    "geslo" : "12345678",
    "poslanaSporocila" : [
            {
                    "_id" : ("5fdb9c490108009c21fa0bfe"),
                    "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
                    "besedilo" : "zivjo manca",
                    "cas" : "2018-12-10T13:45:00.000Z"
            },
            {
                    "_id" : ("5fdb9c490108009c21fa0bff"),
                    "prejemnikSporocila" : "5fdb92a2ad6eda4266f989c1",
                    "besedilo" : "kako si kej manca?",
                    "cas" : "2018-12-13T13:45:00.000Z"
            },
            {
                    "_id" : ("5fdb9c490108009c21fa0c00"),
                    "prejemnikSporocila" : "5fdb92b4ad6eda4266f989c2",
                    "besedilo" : "hey tine its manca",
                    "cas" : "2018-12-13T13:45:00.000Z"
            }
    ],
    "kontakti" : [
            "5fdb92a2ad6eda4266f989c1",
            "5fdb92b4ad6eda4266f989c2"
    ]
  }, function (napaka, rezultat){
    if(napaka){
      res.status(500).json(napaka);
    }else{
      res.status(200).json(rezultat);
    }
  }
  )
}


const deleteAll = (req, res) => {
    User.collection.drop(function (napaka, rezultat){
      if(napaka){
        res.status(500).json(napaka);
      }else{
        res.status(204).json(rezultat);
      }
    }
  )};



module.exports = {
    naloziKontakte,
    kreirajSporocilo,
    naloziSporocilaKontakta,
    kreirajKontakt,
    insertAll,
    deleteAll
}