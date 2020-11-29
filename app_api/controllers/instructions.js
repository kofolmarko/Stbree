//IMPORT mongoose
const mongoose = require('mongoose');

//IMPORT object model
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
const User = mongoose.model('User');

//GET instructors list
const instruktorji = (req, res) => {
  User
    .aggregate()
    .limit(10)
    .exec((napaka, instruktorji) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        res.status(200).json(instruktorji.map(instruktor => {
          return {
            "_id": instruktor._id,
            "statusInstruktorja": instruktor.statusInstruktorja,
            "ime": instruktor.ime,
            "priimek": instruktor.priimek,
            "opis": instruktor.opis,
            "email": instruktor.email,
            "geslo": instruktor.geslo,
            "datumVpisa": instruktor.datumVpisa
          };
        }));
      }
    });
};

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
    ura: req.body.ura,
    steviloProstihMest: req.body.steviloProstihMest,
    idInstruktorja: req.body.idInstruktorja
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
              "ura": instrukcijeDogodek.ura,
              "steviloProstihMest": instrukcijeDogodek.steviloProstihMest,
              "idInstruktorja": instrukcijeDogodek.idInstruktorja
            };
          })
        );
      }
    });
};

//ORDER BY PARAMETER
const instrukcijeDogodkiOrder = (req, res) => {
  console.log("INSIDE API");
  console.log(req.params.parameter);

  let {parameter} = req.params;
  console.log(parameter.substring(0,3));
  console.log(parameter.substring(3));

  if(parameter.substring(0,3) == "REV") {
    console.log("We have a reverse!");
    parameter = parameter.substring(3);
  }

  console.log(parameter);

    InstrukcijeDogodek
    .aggregate()
    .limit(10)
    .sort(parameter)
    .exec((napaka, instrukcijeDogodki) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        console.log("RETURNING OBJECTS FROM API");
        res.status(200).json(
          instrukcijeDogodki.map(instrukcijeDogodek => {
            return {
              "_id": instrukcijeDogodek._id,
              "naziv": instrukcijeDogodek.naziv,
              "opis": instrukcijeDogodek.opis,
              "cena": instrukcijeDogodek.cena,
              "datum": instrukcijeDogodek.datum,
              "ura": instrukcijeDogodek.ura,
              "steviloProstihMest": instrukcijeDogodek.steviloProstihMest,
              "idInstruktorja": instrukcijeDogodek.idInstruktorja
            };
          })
        );
      }
    });
  
};

//GET instructions event by id
const instrukcijeDogodekPreberi = (req, res) => {
  InstrukcijeDogodek
    .findById(req.params.idDela)
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({
          "sporočilo":
            "Dogodek ne obstaja."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      console.log(instrukcijeDogodek.data);
      res.status(200).json(instrukcijeDogodek);
    });
};

//PUT update instructions event (CURRENTLY NOT IN USE)
const instrukcijeDogodekPosodobi = (req, res) => {
  console.log("Inside controllers on the API!");
  InstrukcijeDogodek
    .findByIdAndUpdate(req.params.idDogodka,
      {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum,
        ura: req.body.ura,
        steviloProstihMest: req.body.steviloProstihMest,
        idInstruktorja: req.body.idInstruktorja

      })
    .exec((napaka, instrukcijeDogodek) => {
      if (!instrukcijeDogodek) {
        return res.status(404).json({
          "sporočilo":
            "Dogodek ne obstaja."
        });
      } else if (napaka) {
        console.log(napaka.data);
        return res.status(500).json(napaka);
      }
      console.log(instrukcijeDogodek.data);
      res.status(200).json(instrukcijeDogodek);
    });
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
  instruktorji,
  instrukcijeDogodekKreiraj,
  instrukcijeDogodki,
  instrukcijeDogodkiOrder,
  instrukcijeDogodekPreberi,
  instrukcijeDogodekPosodobi,
  instrukcijeDogodekIzbrisi
};