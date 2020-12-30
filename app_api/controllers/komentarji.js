//IMPORT mongoose
const mongoose = require('mongoose');
mongoose.set('returnOriginal', false);

//IMPORT object model
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
const User = mongoose.model('User');
const Komentar = mongoose.model('Komentar');

const dodajKomentar = (req, res, dogodek) => {
    if (!dogodek) {
      res.status(404).json({"sporočilo": "Ne najdem dogodka."});
    } else {
      Komentar.create({
        avtor: req.body.avtor,
        ocena: req.body.ocena,
        besediloKomentarja: req.body.besediloKomentarja
      }, (napaka, komentar) => {
        console.log(napaka);
        console.log(komentar);
        
        if (napaka) {
          res.status(400).json({"sporočilo": "Napaka API-ja pri kreaciji komentarja."});
        } else if(komentar) {
          InstrukcijeDogodek
          .findByIdAndUpdate(dogodek._id,{
            $addToSet: { komentarji: komentar }
          })
          .exec((napaka, instrukcijeDogodek) => {
            if (!instrukcijeDogodek) {
              return res.status(404).json({
                "sporočilo":
                  "Dogodek ne obstaja."
              });
            } else if (napaka) {
              return res.status(500).json(napaka);
            }
          });
          res.status(201).json(komentar);
        }
        else {
          res.status(404).json({"sporočilo": "Komentar ne obstaja."});
        }
      });
    }
};  

const komentarjiKreiraj = (req, res) => {
    const id = req.params.idDogodka;
    if (id) {
      InstrukcijeDogodek
        .findById(id)
        .select('komentarji')
        .exec((napaka, dogodek) => {
          if (napaka) {
            res.status(400).json(napaka);
          } else {
            dodajKomentar(req, res, dogodek);
          }
        });
    } else {
      res.status(400).json({
        "sporočilo": 
          "Ne najdem dogodka, idDogodka je obvezen parameter."
      });
    }
  };
  
  
  const komentarjiPreberiIzbranega = (req, res) => {
    InstrukcijeDogodek
      .findById(req.params.idDogodka)
      .select('komentarji')
      .exec((napaka, dogodek) => {
        if (!dogodek) {
          return res.status(404).json({
            "sporočilo": 
              "Ne najdem dogodka s podanim enoličnim identifikatorjem idDogodka."
          });
        } else if (napaka) {
          return res.status(500).json(napaka);
        }
        if (dogodek.komentarji && dogodek.komentarji.length > 0) {
          const komentar = dogodek.komentarji.id(req.params.idKomentarja);
          if (!komentar) {
            return res.status(404).json({
              "sporočilo": 
                "Ne najdem komentarja s podanim enoličnim identifikatorjem idDogodka."
            });
          } else {
            res.status(200).json({
              "komentar": komentar
            });
          }
        } else {
          return res.status(404).json({
            "sporočilo": 
              "Ne najdem nobenega komentarja."
          });
        }
      });
  };  
  
  const komentarjiPosodobiIzbranega = (req, res) => {
    if (!req.params.idDogodka || !req.params.idKomentarja) {
      return res.status(404).json({
        "sporočilo": 
          "Ne najdem dogodka oz. komentarja, " +
          "idDogodka in idKomentarja sta obvezna parametra."
      });
    }
    InstrukcijeDogodek
      .findById(req.params.idDogodka)
      .select('komentarji')
      .exec((napaka, dogodek) => {
        if (!dogodek) {
          return res.status(404).json({"sporočilo": "Ne najdem dogodka."});
        } else if (napaka) {
          return res.status(500).json(napaka);
        }
        if (dogodek.komentarji && dogodek.komentarji.length > 0) {
          const trenutniKomentar = dogodek.komentarji.id(req.params.idKomentarja);
          if (!trenutniKomentar) {
            res.status(404).json({"sporočilo": "Ne najdem komentarja."});
          } else {
            trenutniKomentar.avtor = req.body.naziv;
            trenutniKomentar.ocena = req.body.ocena;
            trenutniKomentar.besediloKomentarja = req.body.komentar;
            dogodek.save((napaka, dogodek) => {
              if (napaka) {
                res.status(404).json(napaka);
              } else {
                res.status(200).json(trenutniKomentar);
              }
            });
          }
        }
      });
  };
  
  const komentarjiIzbrisiIzbranega = (req, res) => {
    const {idDogodka, idKomentarja} = req.params;
    if (!idDogodka || !idKomentarja) {
      return res.status(404).json({
        "sporočilo": 
          "Ne najdem dogodka oz. komentarja, " + 
          "idDogodka in idKomentarja sta obvezna parametra."
      });
    }
    InstrukcijeDogodek
      .findById(idDogodka)
      .select('komentarji')
      .exec((napaka, dogodek) => {
        if (!dogodek) {
          return res.status(404).json({"sporočilo": "Ne najdem dogodka."});
        } else if (napaka) {
          return res.status(500).json(napaka);
        }
        console.log(dogodek.komentarji);
        if (dogodek.komentarji && dogodek.komentarji.length > 0) {
          if (!dogodek.komentarji.id(idKomentarja)) {
            return res.status(404).json({"sporočilo": "Ne najdem komentarja."});
          } else {
            dogodek.komentarji.id(idKomentarja).remove();
            dogodek.save((napaka) => {
              if (napaka) {
                return res.status(500).json(napaka);
              } else {
                res.status(204).json({"sporočilo": "uspešno zbrisan komentar."});
              }
            });
          }
        } else {
          res.status(404).json({"sporočilo": "Ni komentarja za brisanje."});
        }
      });
  };
  

  module.exports = {
    komentarjiKreiraj,
    komentarjiPreberiIzbranega,
    komentarjiPosodobiIzbranega,
    komentarjiIzbrisiIzbranega
  };
