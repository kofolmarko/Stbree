const mongoose = require('mongoose');

const deloShema = new mongoose.Schema({
  naziv: { type: String, required: true },
  opis: { type: String, required: true },
  cena: Number,
  datum: { type: Date, required: true }
});

mongoose.model('Job', deloShema, 'Jobs');
module.exports = deloShema;