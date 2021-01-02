//IMPORT mongoose
const mongoose = require('mongoose');
mongoose.set('returnOriginal', false);

//IMPORT object model
const Delo = mongoose.model('Delo');
const User = mongoose.model('User');
const KomentarDel = mongoose.model('KomentarDel');

const dodajKomentar = (req, res, delo) => {
    if (!delo) {
      res.status(404).json({"sporočilo": "Ne najdem dela."});
    } else {
      KomentarDel.create({
        avtor: req.body.avtor,
        ocena: req.body.ocena,
        besediloKomentarja: req.body.besediloKomentarja
      }, (napaka, komentar) => {
        console.log(napaka);
        console.log(komentar);
        
        if (napaka) {
          res.status(400).json({"sporočilo": "Napaka API-ja pri kreaciji komentarja."});
        } else if(komentar) {
          Delo
          .findByIdAndUpdate(delo._id,{
            $addToSet: { komentarji: komentar }
          })
          .exec((napaka, deloDogodek) => {
            if (!deloDogodek) {
              return res.status(404).json({
                "sporočilo":
                  "Delo ne obstaja."
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
    const id = req.params.idDela;
    if (id) {
      Delo
        .findById(id)
        .select('komentarji')
        .exec((napaka, delo) => {
          if (napaka) {
            res.status(400).json(napaka);
          } else {
            dodajKomentar(req, res, delo);
          }
        });
    } else {
      res.status(400).json({
        "sporočilo": 
          "Ne najdem dela, idDela je obvezen parameter."
      });
    }
  };
  
  
  const komentarjiPreberiIzbranega = (req, res) => {
    Delo
      .findById(req.params.idDela)
      .select('komentarji')
      .exec((napaka, delo) => {
        if (!delo) {
          return res.status(404).json({
            "sporočilo": 
              "Ne najdem dela s podanim enoličnim identifikatorjem idDela."
          });
        } else if (napaka) {
          return res.status(500).json(napaka);
        }
        if (delo.komentarji && delo.komentarji.length > 0) {
          const komentar = delo.komentarji.id(req.params.idKomentarja);
          if (!komentar) {
            return res.status(404).json({
              "sporočilo": 
                "Ne najdem komentarja s podanim enoličnim identifikatorjem idDela."
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
    console.log(req.body);
    console.log(req.params);
    if(!req.body.besediloKomentarja || !req.body.ocena) {
      return res.status(400).json({"sporočilo": "Potrebno je izpolniti vsa polja."});
    }
    KomentarDel
      .findByIdAndUpdate(req.params.idKomentarja,
        {
          ocena: req.body.ocena,
          besediloKomentarja: req.body.besediloKomentarja
  
        })
      .exec((napaka, komentar) => {
        if (!komentar) {
          return res.status(404).json({
            "sporočilo":
              "Dogodek ne obstaja."
          });
        } else if (napaka) {
          console.log(napaka.data);
          return res.status(500).json(napaka);
        }
        console.log(komentar.data);
        res.status(200).json(komentar);
      });
  };
  
  const komentarjiIzbrisiIzbranega = (req, res) => {
    const {idDela, idKomentarja} = req.params;
    if (!idDela || !idKomentarja) {
      return res.status(404).json({
        "sporočilo": 
          "Ne najdem dela oz. komentarja, " + 
          "idDela in idKomentarja sta obvezna parametra."
      });
    }
    Delo
      .findById(idDela)
      .select('komentarji')
      .exec((napaka, delo) => {
        if (!delo) {
          return res.status(404).json({"sporočilo": "Ne najdem dela."});
        } else if (napaka) {
          return res.status(500).json(napaka);
        }
        console.log(delo.komentarji);
        if (delo.komentarji && delo.komentarji.length > 0) {
          if (!delo.komentarji.id(idKomentarja)) {
            return res.status(404).json({"sporočilo": "Ne najdem komentarja."});
          } else {
            delo.komentarji.id(idKomentarja).remove();
            delo.save((napaka) => {
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
