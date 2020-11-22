const mongoose = require('mongoose');
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');

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

const instrukcijeDogodekPosodobi = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

const instrukcijeDogodekIzbrisi = (req, res) => {
  const {idDogodka} = req.params;
  if (!idDogodka) {
    return res.status(404).json({
      "sporočilo": 
        "Ne najdem Dogodka " + 
        "idDogodka in idDogodka sta obvezna parametra."
    });
  }
  InstrukcijeDogodek
    .findByIdAndDelete(idDogodka)
    .select('instrukcije-dogodki')
    .exec((napaka, dogodek) => {
      if (!dogodek) {
        return res.status(404).json({"sporočilo": "Ne najdem Dogodka."});
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      if (dogodek.length > 0) {
        if (!dogodek.id(idDogodka)) {
          return res.status(404).json({"sporočilo": "Ne najdem dogodka."});
        } else {
          dogodek.id(idDogodka).remove();
        }
      } else {
        res.status(404).json({"sporočilo": "Ni Dogodka za brisanje."});
      }
    });
};

module.exports = {
  instrukcijeDogodekKreiraj,
  instrukcijeDogodki,
  instrukcijeDogodekPreberi,
  instrukcijeDogodekPosodobi,
  instrukcijeDogodekIzbrisi
};