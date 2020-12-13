
const mongoose = require('mongoose');
const User = mongoose.model('User');

//////////////////////// g e t  s p o r o c i l a ////////////////////////
const naloziSporocilo = (req, res) => {
  User
  .find({ $or:
    [
      { _id: req.params.idUserja},
      { _id: req.query.idPrejemnika}
    ]}, (napaka, users) => {
      
      if (!users) {
        return res.status(404).json({
          "sporočilo": 
          "Ne najdem uporabnika s podanim enoličnim identifikatorjem idUserja."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      
      // console.log("v bazi smo nasli:\n", users);
      console.log("prvi user jeeeee:\n", users[0]);
      console.log("drugi user jeeeee\n", users[1]);
    res.status(200).json({
      "mojeIme": users[0].ime,
      "kolegovoIme": users[1].ime,
      "prviUser":users[0],
      "drugiUser": users[1]
    });



  })

};


//////////////////////// d o d a j  m e t o d a ////////////////////////
const dodajSporocilo = (req, res, uporabnik) => {
    //console.log("!!!!!!!!!!v app_api je req.body.idPrejemnika v metodi:" + req.body.prejemikSporocila);

  //str = JSON.safeStringify(req);
  //console.log(str);



  if (!uporabnik) {
    res.status(404).json({"sporočilo": "Ne najdem uporabnika."});
  } else {
    uporabnik.poslanaSporocila.push({
      //avtorSporocila: req.body.avtor,
      prejemnikSporocila: req.body.prejemnikSporocila,
      besedilo: req.body.besedilo
    });

    //str = JSON.safeStringify(uporabnik);
    //console.log("najin nov izpis uporabnika " + str);

    uporabnik.save((napaka, uporabnik) => {
      if (napaka) {
        res.status(400).json(napaka);
      } else {
        const dodanoSporocilo = uporabnik.poslanaSporocila.slice(-1).pop();
       //console.log("heooooo dodanoSporocilo: " + dodanoSporocilo.besedilo);
      //console.log("heooooo dodanoSporocilo prejemnik: " + dodanoSporocilo.prejemikSporocila);
      res.status(201).json(dodanoSporocilo.besedilo);
      }
    });
  }
};


JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

//////////////////////// p o s t  s p o r o c i l o ////////////////////////
  const kreirajSporocilo = (req, res) => {
    const idUporabnika = req.params.idUserja;
    console.log("znotraj post metodeeeeeeee" + idUporabnika)
    if (idUporabnika) {
      User
        .findById(idUporabnika)
        .select('poslanaSporocila')
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




module.exports = {
    naloziSporocilo,
    kreirajSporocilo
}