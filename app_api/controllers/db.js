//IMPORT mongoose
const mongoose = require('mongoose');
mongoose.set('returnOriginal', false);

//IMPORT object model
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
const Delo = mongoose.model('Delo');
const User = mongoose.model('User');

//DROP DB
const bazaIzbrisi = (req, res) => {
    console.log("deleting database...");

    try {
        mongoose.connection.collections['InstrukcijeDogodki'].drop();
    } catch (err) {
        // console.log("Zbirka ne obstaja.");
    }

    try {
        mongoose.connection.collections['Dela'].drop();
    } catch (err) {
        // console.log("Zbirka ne obstaja.");
    }

    try {
        mongoose.connection.collections['Users'].drop();
    } catch (err) {
        // console.log("Zbirka ne obstaja.");
    }

    try {
        mongoose.connection.collections['Komentarji'].drop();
    } catch (err) {
        // console.log("Zbirka ne obstaja.");
    }

    try {
        mongoose.connection.collections['KomentarjiDel'].drop();
    } catch (err) {
        // console.log("Zbirka ne obstaja.");
    }

    return res.status(200);
};

module.exports = {
    bazaIzbrisi
};