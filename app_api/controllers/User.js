const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');

//GET user by id
const uporabnikPreberiProfil = (req, res) => {
    Uporabnik
        .findById(req.params.idUporabnika)
        .exec((napaka, uporabnik) => {
            console.log('1');
            if(!uporabnik){
                console.log('2');
                return res.status(404).json({
                    "sporočilo": "Uporabnik ne obstaja."
                });
            } else if(napaka) {
                console.log('3');
                return res.status(500).json(napaka);
            }
            console.log('4');
            res.status(200).json(uporabnik);
        });
};

module.exports = {
    uporabnikPreberiProfil                          
};