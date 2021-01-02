//IMPORT mongoose
const mongoose = require('mongoose');
mongoose.set('returnOriginal', false);

//IMPORT object model
const InstrukcijeDogodek = mongoose.model('InstrukcijeDogodek');
const Delo = mongoose.model('Delo');
const User = mongoose.model('User');

//const napolniBazo