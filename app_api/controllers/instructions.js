//IMPORT mongoose
const mongoose = require('mongoose');

//IMPORT object model
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');


//CREATE new instructions event
const instrukcijeDogodekKreiraj = (req, res) => {
  console.log("pridem do kreacije");
  console.log(req.body);
  res.status(200).json({ "status": "uspešno" });
  InstrukcijeDogodek.create({
    naziv: req.body.naziv,
    opis: req.body.opis,
    cena: req.body.cena,
    datum: req.body.datum,
    steviloProstihMest: req.body.steviloProstihMest
  }, (napaka, instrukcijeDogodek) => {
    console.log(napaka);
    console.log(instrukcijeDogodek);
    /*
    if (napaka) {
      res.status(400).json(napaka);
    } else {
      res.status(201).json(instrukcijeDogodek);
    }
    */
  });
};

//GET instructions events list
const instrukcijeDogodki = (req, res) => {
  InstrukcijeDogodek
    .aggregate()
    .limit(10)
    .exec((napaka, instrukcijeDogodki) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        res.status(200).json(
          instrukcijeDogodki.map(instrukcijeDogodek => {
            return {
              "_id": instrukcijeDogodek._id,
              "naziv": instrukcijeDogodek.naziv,
              "opis": instrukcijeDogodek.opis,
              "cena": instrukcijeDogodek.cena,
              "datum": instrukcijeDogodek.datum,
              "steviloProstihMest": instrukcijeDogodek.steviloProstihMest
            };
          })
        );
      }
    });
};

//GET instructions event by id
const instrukcijeDogodekPreberi = (req, res) => {
  InstrukcijeDogodek
    .findById(req.params.idDogodka)
    .exec((napaka, instrukcijeDogodek) => {
      if (!instrukcijeDogodek) {
        return res.status(404).json({
          "sporočilo":
            "Ne najdem dogodka s podanim enoličnim identifikatorjem idDogodka."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(instrukcijeDogodek);
    });
};

//PUT update instructions event (CURRENTLY NOT IN USE)
const instrukcijeDogodekPosodobi = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

//DELETE instructons event by id
const instrukcijeDogodekIzbrisi = (req, res) => {
  console.log("izbris");
  const { idDogodka } = req.params;
  console.log(idDogodka);
  if (!idDogodka) {
    return res.status(404).json({
      "sporočilo":
        "Ne najdem Dogodka " +
        "idDogodka in idDogodka sta obvezna parametra."
    });
  }
  InstrukcijeDogodek
    .findByIdAndDelete(idDogodka)
    /*
    .then((dogodek) => {
      console.log(dogodek);
    });
    */
    .exec((napaka, dogodek) => {
      console.log("tukaj dogodek:" + dogodek, " tukaj napaka: " + napaka);
      if (!dogodek) {
        return res.status(404).json({ "sporočilo": "Ne najdem Dogodka." });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(dogodek);
    });
};


//EXPORT functions
module.exports = {
  instrukcijeDogodekKreiraj,
  instrukcijeDogodki,
  instrukcijeDogodekPreberi,
  instrukcijeDogodekPosodobi,
  instrukcijeDogodekIzbrisi
};