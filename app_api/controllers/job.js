const mongoose = require('mongoose');
const Delo = mongoose.model('Job');

const deloKreiraj = (req, res) => {
  console.log("delo se kreira");
  console.log(req.body);
  res.status(200).json({ "status": "uspešno" });
  Delo.create({
    naziv: req.body.naziv,
    opis: req.body.opis,
    cena: req.body.cena,
    datum: req.body.datum,
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

const dela = (req, res) => {
  Delo
    .aggregate()
    .limit(10)
    .exec((napaka, instrukcijeDogodki) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        res.status(200).json(
          deloDogodki.map(instrukcijeDogodek => {
            return {
              "_id": delo._id,
              "naziv": delo.naziv,
              "opis": delo.opis,
              "cena": delo.cena,
              "datum": delo.datum,
            };
          })
        );
      }
    });
};

const deloPreberi = (req, res) => {
  Delo
    .findById(req.params.idDela)
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({
          "sporočilo":
            "Ne najdem dela s podanim enoličnim identifikatorjem idDela."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(delo);
    });
};

const deloPosodobi = (req, res) => {
  res.status(200).json({ "status": "uspešno" });
};

const deloIzbrisi = (req, res) => {
  const {idDela} = req.params;
  if (!idDela) {
    return res.status(404).json({
      "sporočilo": 
        "Ne najdem dela " + 
        "idDela je obvezen parameter."
    });
  }
  Dela
    .findByIdAndDelete(idDela)
    .select('dela')
    .exec((napaka, delo) => {
      if (!delo) {
        return res.status(404).json({"sporočilo": "Ne najdem dela."});
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      if (delo.length > 0) {
        if (!delo.id(idDelo)) {
          return res.status(404).json({"sporočilo": "Ne najdem dela."});
        } else {
          delo.id(idDelo).remove();
        }
      } else {
        res.status(404).json({"sporočilo": "Ni dela za brisanje."});
      }
    });
};

module.exports = {
  deloKreiraj,
  dela,
  deloPreberi,
  deloPosodobi,
  deloIzbrisi
};