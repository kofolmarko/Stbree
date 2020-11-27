
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

  const kreirajSporocilo = (req, res) => {
    res.status(200).json({"status": "uspešno"});
  };

module.exports = {
    naloziSporocilo,
    kreirajSporocilo
}
