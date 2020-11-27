
const mongoose = require('mongoose');
const modelUserja = mongoose.model('User');


const naloziSporocilo = (req, res) => {
    modelUserja
    .findById(req.params.idUserja)
    .exec((napaka, neki) => {
        res.status(200).json(neki);
      });
  };

  const kreirajSporocilo = (req, res) => {
    res.status(200).json({"status": "uspešno"});
  };

module.exports = {
    naloziSporocilo,
    kreirajSporocilo
}
