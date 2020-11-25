//IMPORT mongoose
const mongoose = require('mongoose');

//IMPORT user model
const Uporabnik = mongoose.model('User');


//GET registered users list
const uporabniki = (req, res) => {
  Uporabnik
    .aggregate()
    .limit(10)
    .exec((napaka, uporabniki) => {
      if (napaka) {
        res.status(500).json(napaka);
      } else {
        res.status(200).json(
          uporabniki.map(uporabnik => {
            return {
              "_id": uporabnik._id,
              "ime": uporabnik.ime,
              "priimek": uporabnik.priimek,
              "email": uporabnik.email,
              "geslo": uporabnik.geslo,
              "statusInstruktorja": uporabnik.statusInstruktorja,
              "statusPrijave": uporabnik.statusPrijave
            };
          })
        );
      }
    });
};

//GET user by id
const najdiUporabnika = (req, res) => {
  //console.log("API IŠČE INŠTRUUKTORJAAAA");
  Uporabnik
    .findById(req.params.idUporabnika)
    .exec((napaka, uporabnik) => {
      if (!uporabnik) {
        return res.status(404).json({
          "sporočilo":
            "Uporabnik ne obstaja."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      //console.log("API je našel uporabnika s podanim ID-jem: " + JSON.stringify(uporabnik));
      //var uporabnikOBJ = JSON.parse(JSON.stringify(uporabnik));
      res.status(200).json(uporabnik);
    });
};

//POST register a new user
const registrirajUporabnika = (req, res) => {
  console.log("Creating user JS object with the following data:");
  console.log(req.body);
  res.status(200).json({ "status": "uspešno" });
  Uporabnik.create({
    ime: req.body.ime,
    priimek: req.body.priimek,
    email: req.body.email,
    geslo: req.body.geslo,
    instruktor: req.body.instruktor,
    datumVpisa: req.body.datumVpisa
  }, (napaka, uporabnik) => {
    console.log(napaka);
    console.log(uporabnik.body);
    /*
    if (napaka) {
      res.status(400).json(napaka);
    } else {
      res.status(201).json(uporabnik);
    }
    */
  });
};

//GET info for user login authentication
const prijaviUporabnika = (req, res) => {
  console.log("params:" + req.params.email);
  Uporabnik
    .findOne({ email: req.params.email })
    .exec((napaka, uporabnik) => {
      if (!uporabnik) {
        return res.status(404).json({
          "sporočilo":
            "Uporabnik ne obstaja."
        });
      } else if (napaka) {
        return res.status(500).json(napaka);
      }
      res.status(200).json(uporabnik);
    });
};

/*OBSOLETE
const nastaviStatus = (req, res) => {
  Uporabnik
    .findOne({email: req.params.email})
    .exec((napaka, uporabnik) => {
      console.log("najdem uporabnika za nastavit status: " + uporabnik);
      if (!uporabnik) {
        console.log("uporabnik ne obstaja");
        return res.status(404).json({
          "sporočilo":
            "Uporabnik ne obstaja."
        });
      } else if (napaka) {
        console.log("tukaj je napaka");
        console.log(napaka.data);
        return res.status(500).json(napaka);
      }
      console.log("iz statusa: " + uporabnik.statusPrijave);
      uporabnik.statusPrijave = true;
      console.log("na status: " + uporabnik.statusPrijave);
      console.log(uporabnik);
      res.status(200).json(uporabnik);
    });
};
*/

//EXPORT functions
module.exports = {
  uporabniki,
  najdiUporabnika,
  registrirajUporabnika,
  prijaviUporabnika,
  //nastaviStatus,
};