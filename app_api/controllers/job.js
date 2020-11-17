/* POPRAVI NA SVOJE

const mongoose = require('mongoose');
const Lokacija = mongoose.model('Lokacija');


const lokacijePreberiIzbrano = (req, res) => {
  Lokacija
    .findById(req.params.idLokacije)
    .exec((napaka, lokacija) => {
        if(err) {
            console.log(err);
            res.status(404).json({"sporocilo": "napaka pri poizvedbi: " + err});
        }
        else {
            res.status(200).json(lokacija);
        }
      
    });
};

const lokacijeSeznamPoRazdalji = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const lokacijeKreiraj = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const lokacijePreberiIzbrano = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const lokacijePosodobiIzbrano = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

const lokacijeIzbrisiIzbrano = (req, res) => {
  res.status(200).json({"status": "uspešno"});
};

module.exports = {
  lokacijeSeznamPoRazdalji,
  lokacijeKreiraj,
  lokacijePreberiIzbrano,
  lokacijePosodobiIzbrano,
  lokacijeIzbrisiIzbrano
};

*/