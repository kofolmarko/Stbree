
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
  if (!uporabnik) {
    res.status(404).json({"sporočilo": "Ne najdem uporabnika."});
  } else {
    uporabnik.poslanaSporocila.push({
      avtorSporocila: req.body.avtor,
      prejemnikSporocila: "Marko",
      besedilo: req.body.besedilo
    });

    uporabnik.save((napaka, uporabnik) => {
      if (napaka) {
        res.status(400).json(napaka);
      } else {
        const dodanoSporocilo = uporabnik.poslanaSporocila.slice(-1).pop();
      console.log("heooooo dodanoSporocilo:" + dodanoSporocilo.besedilo);
        res.status(201).json(dodanoSporocilo.besedilo);
      }
    });
  }
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





module.exports = {
    naloziSporocilo,
    kreirajSporocilo
}