const mongoose = require('mongoose');
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');

const instrukcijeDogodekKreiraj = (req, res) => {
  console.log(req.body);
  res.status(200).json({ "status": "uspešno" });
  InstrukcijeDogodek.create({
    naziv: req.body.naziv,
    opis: req.body.opis,
    cena: req.body.cena,
    datum: req.body.datum,
    steviloProstihMest: req.body.steviloProstihMest
  }, (napaka, instrukcijeDogodek) => {
    /*
    if (napaka) {
      res.status(400).json(napaka);
    } else {
      res.status(201).json(instrukcijeDogodek);
    }
    */
  });
};

const instrukcijeDogodki = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

const instrukcijeDogodekPreberi = (req, res) => {
  InstrukcijeDogodek
    .findById(req.params.idDela)
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({
          "sporočilo":
            "Ne najdem dogodka s podanim enoličnim identifikatorjem idLokacije."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(delo);
    });
};

const instrukcijeDogodekPosodobi = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

const instrukcijeDogodekIzbrisi = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

module.exports = {
  instrukcijeDogodekKreiraj,
  instrukcijeDogodki,
  instrukcijeDogodekPreberi,
  instrukcijeDogodekPosodobi,
  instrukcijeDogodekIzbrisi
};