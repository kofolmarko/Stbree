
const mongoose = require('mongoose');
const modelUserja = mongoose.model('User');


const naloziSporocilo = (req, res) => {
    modelUserja
    .findById(req.params.idUserja)
    //  .select('poslanaSporocila')
    .exec((napaka, neki) => {
      if (!neki) {
        return res.status(404).json({
          "sporočilo": 
            "Ne najdem uporabnika s podanim enoličnim identifikatorjem idUserja."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      if (neki.poslanaSporocila && neki.poslanaSporocila.length > 0) {
    
        res.status(200).json({
          "komentar": neki.poslanaSporocila
        });
        
      } else {
        return res.status(404).json({
          "sporočilo": 
            "Ne najdem nobenih sporocil."
        });
      }

    });
};



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
        res.status(201).json(dodanoSporocilo);
      }
    });
  }
};




  const kreirajSporocilo = (req, res) => {
    const idUporabnika = req.params.idUserja;
    console.log(idUporabnika)
    if (idUporabnika) {
      modelUserja
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
