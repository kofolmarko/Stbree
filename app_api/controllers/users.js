//IMPORT mongoose
const mongoose = require('mongoose');
mongoose.set('returnOriginal', false);

//IMPORT user model
const Uporabnik = mongoose.model('User');
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
const Delo = mongoose.model('Delo');


//GET registered users list
const uporabniki = (req, res) => {
  Uporabnik
    .aggregate()
    .limit(99)
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
              "statusPrijave": uporabnik.statusPrijave,
              "dogodki": uporabnik.dogodki,
              "dela": uporabnik.dela,
              "poslanaSporocila": uporabnik.poslanaSporocila
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
  //res.status(200).json({ "status": "uspešno" });
  try {
    Uporabnik.findOne({ email: req.body.email })
      .then((uporabnik) => {
        console.log(uporabnik);
        if (uporabnik != null) {
          res.status(409).json(uporabnik);
        } else {
          console.log(req.body.statusInstruktorja);
          Uporabnik.create({
            ime: req.body.ime,
            priimek: req.body.priimek,
            email: req.body.email,
            geslo: req.body.geslo,
            statusInstruktorja: req.body.statusInstruktorja,
            datumVpisa: req.body.datumVpisa
          }, (napaka, uporabnik) => {
            if (uporabnik) {
              console.log("User successfully registered!" + uporabnik.data);
              res.status(201).json(uporabnik);
            } else {
              console.log("User not registered because of " + napaka);
            }
          });
        }
      });
  } catch (err) {
    console.log("Catch inside API");
  }
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


//PUT prijava na dogodek
const prijavaNaDogodek = (req, res) => {
  console.log("We're inside API!" + req.body);
  console.log("We're inside API!" + req.data);
  console.log("REQUEST PARAMETERS -> " + req.params.loginID);
  console.log("REQUEST PARAMETERS -> " + req.params.idDogodka);
  let stProstih;

  InstrukcijeDogodek
    .findById(req.params.idDogodka)
    .exec((napaka, dogodek) => {
      Uporabnik
        .findByIdAndUpdate(req.params.loginID, {
          $addToSet: { dogodki: dogodek }
        })
        .exec((uporabnik) => {
          //console.log("UPORABNIK PPRED IZHODOM IZ API-JA", uporabnik);
          
        });

    });
  InstrukcijeDogodek
    .findByIdAndUpdate(req.params.idDogodka, {
      $inc: { steviloProstihMest: -1 } 
    })
    .exec((napaka, dogodek) => {
      res.status(200).json(dogodek);
    });
};

//PUT odjava od dogodka
const odjavaOdDogodka = (req, res) => {
  console.log("api odjava od dogodka");
  console.log(req.params.loginID);
  InstrukcijeDogodek
  .findById(req.params.idDogodka)
  .exec((napaka, dogodek) => {
    console.log("Api najde dogodek: " + dogodek);
    Uporabnik
      .findByIdAndUpdate(req.params.loginID, {
        $pull: { dogodki: { dogodek: dogodek._id } }}, { safe: true, multi:true }, function(err, obj) {
         //console.log(dogodki);
          console.log(obj.dogodki);
         
         console.log(err);
        })
      .exec((uporabnik) => {
        console.log("UPORABNIK PPRED IZHODOM IZ API-JA", uporabnik);
        res.status(200).json(uporabnik);
      });

  });
};


//PUT prijava na dogodek
const prijavaNaDelo = (req, res) => {
  console.log("We're inside API!" + req.body);
  console.log("We're inside API!" + req.data);
  console.log("REQUEST PARAMETERS -> " + req.params.loginID);
  console.log("REQUEST PARAMETERS -> " + req.params.idDela);
  let stProstih;

  Delo
    .findById(req.params.idDela)
    .exec((napaka, delo) => {
      Uporabnik
        .findByIdAndUpdate(req.params.loginID, {
          $addToSet: { dela: delo }
        })
        .exec((uporabnik) => {
          //console.log("UPORABNIK PPRED IZHODOM IZ API-JA", uporabnik);
          
        });

    });
  Delo
    .findByIdAndUpdate(req.params.idDela, {
      zasedeno: true
    })
    .exec((napaka, delo) => {
      res.status(200).json(delo);
    });
};

//PUT odjava od dogodka
const odjavaOdDela = (req, res) => {
  console.log("api odjava od dogodka");
  console.log(req.params.loginID);
  InstrukcijeDogodek
  .findById(req.params.idDela)
  .exec((napaka, delo) => {
    console.log("Api najde dogodek: " + delo);
    Uporabnik
      .findByIdAndUpdate(req.params.loginID, {
        $pull: { dela: { delo: delo._id } }}, { safe: true, multi:true }, function(err, obj) {
         //console.log(dogodki);
          console.log(obj.dela);
         
         console.log(err);
        })
      .exec((uporabnik) => {
        console.log("UPORABNIK PPRED IZHODOM IZ API-JA", uporabnik);
        res.status(200).json(uporabnik);
      });

  });
};

 /*PUT update user*/
 const posodobiUporabnika = (req, res) => {
  console.log("Inside controllers on the API!");
  console.log(req.body.email);
  Uporabnik
    .findByIdAndUpdate(req.params.idUporabnika,
      {
        email: req.body.email,
        telefonskaStevilka: req.body.telefonskaStevilka,
        opis: req.body.opis,
        statusInstruktorja: req.body.statusInstruktorja
      })
    .exec((napaka, uporabnik) => {
      if (!uporabnik) {
        return res.status(404).json({
          "sporočilo":
            "Dogodek ne obstaja."
        });
      } else if (napaka) {
        console.log(napaka.data);
        return res.status(500).json(napaka);
      }
      console.log(uporabnik.data);
      res.status(200).json(uporabnik);
    });
};

const posodobiGeslo = (req, res) => {
  console.log("Inside controllers on the API!");
  Uporabnik
    .findByIdAndUpdate(req.params.idUporabnika,
      {
        geslo: req.body.geslo
      })
    .exec((napaka, uporabnik) => {
      if (!uporabnik) {
        return res.status(404).json({
          "sporočilo":
            "Dogodek ne obstaja."
        });
      } else if (napaka) {
        console.log(napaka.data);
        return res.status(500).json(napaka);
      }
      console.log(uporabnik.data);
      res.status(200).json(uporabnik);
    });
};

 /*PUT update user grade*/
 const posodobiOcena = (req, res) => {
  console.log("Inside controllers on the API!");
  var novaOcena = Number(req.body.ocena);//?
  Uporabnik
    .findById(req.params.idUporabnika)
    .exec((napaka, uporabnik) => {
      if (!uporabnik) {
        return res.status(404).json({
          "sporočilo":
            "Uporabnik ne obstaja."
        });
      } else if (napaka) {
        console.log(napaka.data);
        return res.status(500).json(napaka);
      }
      var ocen = uporabnik.ocen;
      ocen[ocen.length] = novaOcena;
      var zbir = 0;
      for(var i = 0 ; i < ocen.length; i++) {
        zbir = zbir + ocen[i];
      }
      var ocena2 = zbir / ocen.length;
      console.log("Ocena 2 je: " + ocena2);
      Uporabnik
      .findByIdAndUpdate(req.params.idUporabnika,
        {
          ocena: ocena2,
          ocen: ocen
        })
      .exec((napaka, uporabnik) => {
        if (!uporabnik) {
          return res.status(404).json({
            "sporočilo":
              "Uporabnik ne obstaja."
          });
        } else if (napaka) {
          console.log(napaka.data);
          return res.status(500).json(napaka);
        }
        console.log(uporabnik.data);
        res.status(200).json(uporabnik);
      });
    });
};

/*DELETE user*/
const izbrisiUporabnika = (req, res) => {
  console.log('izbrisi uporabnik v api');
  const idUporabnika = req.params.idUporabnika;
  console.log(idUporabnika);
  if(!idUporabnika) {
    return res.status(404).json({
      "sporocilo": "Ne najdem identifikatorja"
    });
  } 
  Uporabnik
  .findByIdAndDelete(idUporabnika)
  .exec((napaka, uporabnik) => {
    if(!uporabnik) {
      return res.status(404).json({
        "sporocilo": "Ne najdem uporabnika"
      });
    } else if (napaka) {
      return res.status(500).json(napaka);
    }
    res.status(204).json(uporabnik); //neli e 204
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
  prijavaNaDogodek,
  odjavaOdDogodka,
  prijavaNaDelo,
  odjavaOdDela,
  posodobiUporabnika,
  posodobiGeslo,
  posodobiOcena,
  izbrisiUporabnika,
  //nastaviStatus,
};