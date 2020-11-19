const mongoose = require('mongoose');

//let InstrukcijeDogodek = require('../models/instructions');

const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');

const instrukcijeDogodekKreiraj = (req, res) => {
  console.log(req);
    InstrukcijeDogodek.create({
        naziv: req.body.naziv,
        opis: req.body.opis,
        cena: req.body.cena,
        datum: req.body.datum.$date,
        ura: req.body.ura,
        prostaMesta: req.body.prostaMesta
    }, (napaka, instrukcijeDogodek) => {
        /*if(napaka) {
            res.status(400).json(napaka);
        } else {
            res.status(201).json(namig);
        }*/

        console.log(napaka);
    });
};

module.exports = {
  instrukcijeDogodekKreiraj
};