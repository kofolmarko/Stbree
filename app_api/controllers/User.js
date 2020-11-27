const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');

//GET user by id
const uporabnikPreberiProfil = (req, res) => {
    Uporabnik
        .findById(req.params.idUporabnika)
        .exec((napaka, uporabnik) => {
            if(!uporabnik){
                return res.status(404).json({
                    "sporočilo": "Uporabnik ne obstaja."
                });
            } else if(napaka) {
                return res.status(500).json(napaka);
            }
            res.status(200).json({uporabnik});
        });
};

module.exports = {
    uporabnikPreberiProfil                          
};