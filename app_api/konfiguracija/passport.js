const passport = require('passport');
const LokalnaStrategija = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');

passport.use(
    new LokalnaStrategija(
      {
        usernameField: 'email',
        passwordField: 'geslo'
      },
      (uporabniskoIme, geslo, pkKoncano) => {
        Uporabnik.findOne(
          { email: uporabniskoIme },
          (napaka, uporabnik) => {
            if (napaka)
              return pkKoncano(napaka);
            if (!uporabnik || !uporabnik.preveriGeslo(geslo)) {
              return pkKoncano(null, false, {
                "sporočilo": "Napačno uporabniško ime ali geslo."
              });
            }
            // if (!uporabnik.preveriGeslo(geslo)) {
            //   return pkKoncano(null, false, {
            //     "sporočilo": "Napačno geslo"
            //   });
            // }
            return pkKoncano(null, uporabnik);
          }
        );
      }
    )
  );