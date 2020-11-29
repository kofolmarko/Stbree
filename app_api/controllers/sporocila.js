
const mongoose = require('mongoose');
const User = mongoose.model('User');

//////////////////////// g e t  s p o r o c i l a ////////////////////////
const naloziSporocilo = (req, res) => {
  User
  .findById(req.params.idUserja)
    //  .select('poslanaSporocila')
  .exec((napaka, user) => {
    if (!user) {
      return res.status(404).json({
        "sporočilo": 
          "Ne najdem uporabnika s podanim enoličnim identifikatorjem idUserja."
      });
    } else if (napaka) {
      return res.status(500).json(napaka);
    }
    console.log("v napaki 200 ali pac ne napaki!!!!");   
    console.log("posali smo user:" + user);
    console.log("dolzina arraya:" + user.poslanaSporocila.length);

      res.status(200).json({
        "ime":user.ime,
        "komentar": user.poslanaSporocila
      });

  });
};


//////////////////////// d o d a j  m e t o d a ////////////////////////
const dodajSporocilo = (req, res, uporabnik) => {
  if (!uporabnik) {
    res.status(404).json({"sporočilo": "Ne najdem uporabnika."});
  } else {
    uporabnik.poslanaSporocila.push({
      avtorSporocila: req.body.avtor,
      prejemnikSporocila: req.body.prejemnik,
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
            console.log("basically na koncu")
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
