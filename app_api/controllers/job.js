/* Import Mongoose */
const mongoose = require('mongoose');

/* Import object model */
const Delo = mongoose.model('Delo');
//const User = mongoose.model('User');

/* Create new job */
const deloKreiraj = (req, res) => {
  console.log("delo se kreira");
  console.log(req.body);
  res.status(200).json({ "status": "uspešno" });
  Delo.create({
    naziv: req.body.naziv,
    opis: req.body.opis,
    cena: req.body.cena,
    datum: req.body.datum,
    idPonudnika: req.body.idPonudnika
  }, (napaka, delo) => {
    console.log(napaka);
    console.log(delo);
    /*
    if (napaka) {
      res.status(400).json(napaka);
    } else {
      res.status(201).json(instrukcijeDogodek);
    }
    */
  });
};

/* GET job list */
const dela = (req, res) => {
  Delo
    .aggregate()
    .limit(10)
    .exec((napaka, dela) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        res.status(200).json(
          dela.map(delo => {
            return {
              "_id": delo._id,
              "naziv": delo.naziv,
              "opis": delo.opis,
              "cena": delo.cena,
              "datum": delo.datum,
              "idPonudnika": delo.idPonudnika
            };
          })
        );
      }
    });
};

/* GET job by ID */
const deloPreberi = (req, res) => {
  Delo
    .findById(req.params.idDela)
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({
          "sporočilo":
            "Delo ne obstaja"
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      console.log(delo.data);
      res.status(200).json(delo);
    });
};

/* PUT update job */
const deloUredi = (req, res) => {
  console.log("Inside controllers on the API!");
  Delo
    .findByIdAndUpdate(req.params.idDela,
      {
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.cena,
        idPonudnika: req.body.idPonudnika
      })
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({
          "sporočilo":
            "Delo ne obstaja"
        });
      } else if (napaka) {
        console.log(napaka.data)
        return res.status(500).json(napaka);
      }
      console.log(delo.data);
      res.status(200).json(delo);
    });
};

/* DELETE job by ID */
const deloIzbrisi = (req, res) => {
  console.log("izbris");
  const { idDela } = req.params;
  console.log(idDela);
  if (!idDela) {
    return res.status(404).json({
      "sporočilo":
        "Ne najdem dela " +
        "idDela je obvezen parameter."
    });
  }
  Delo
    .findByIdAndDelete(idDela)
    /*
    .then((delo) => {
      console.log(delo);
    });
    */
    .exec((napaka, delo) => {
      console.log("tukaj dogodek:" + delo, " tukaj napaka: " + napaka);
      if (!delo) {
        return res.status(404).json({ "Sporočilo": "Ne najdem dela." });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(delo);
    });
};

module.exports = {
  deloKreiraj,
  dela,
  deloPreberi,
  deloUredi,
  deloIzbrisi
};