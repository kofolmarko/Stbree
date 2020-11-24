//API connection
const axios = require('axios');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:' + (process.env.PORT || 3000)
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}


//RENDER signup page
const signup = (req, res) => {
  res.render('signup');
};

//POST REGISTER a new user
const registerNewUser = (req, res) => {
  //const {ime, priimek} = req.body; -deconstruction
  if (!req.body.ime || !req.body.priimek || !req.body.email || !req.body.geslo || !req.body.gesloPotrdi) {
    console.log("Please complete the whole form.");
  } else if (req.body.geslo != req.body.gesloPotrdi) {
    console.log("Passwords do not match!");
  } else {
    //console.log("Registering a new User to the database...");
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/uporabniki',
      data: {
        ime: req.body.ime,
        priimek: req.body.priimek,
        email: req.body.email,
        geslo: req.body.geslo,
        instruktor: req.body.instruktor
      }
    }).then((user) => {
      console.log("New user registered:");
      console.log(user.data);
      res.redirect('/prijava');
    }).catch((napaka) => {
      console.log("here is the error");
      prikaziNapako(req, res, napaka);
    });
  }
};

//GLOBAL VARIABLE LOGIN STATUS
let loginStatus = false;

//IMPORT navbar switcher
const navbarToggle = require('../../public/javascripts/navbar-toggle');

//RENDER signin page
const signin = (req, res) => {
  res.render('signin');
};

//GET LOGIN a registered user
const loginUser = (req, res) => {
  if (!req.body.email || !req.body.geslo) {
    console.log("Prosim izpolnite vsa polja.");
  } else {
    const reqData = { email: req.body.email, geslo: req.body.geslo };
    //console.log(reqData);
    //console.log(reqData.email);
    axios.get('http://localhost:3000/api/uporabniki/' + reqData.email,
      {
        email: reqData.email,
        geslo: reqData.geslo
      })
      .then((user) => {
        //console.log("NAZAJ NA SERVERJU");
        //console.log(user.data);
        loginStatus = true;
        console.log("Login status set to " + loginStatus);
        navbarToggle(loginStatus);
        res.redirect('/my');
      })
      .catch((napaka) => {
        //console.log("IZVEDBA CATCH");
        //console.log(napaka.data);
        if (napaka) {
          prikaziNapako(req, res, napaka);
        } else {
          console.log("cant find error");
        }

      });
  }
};

//API GET list of all registered users
const users = (req, res) => {
  axios
    .get('http://localhost:3000/api/instrukcije-dogodki')
    .then((odgovor) => {
      prikaziNapako(req, res, odgovor);
    })
    .catch((err) => {
      instructionsEventList(req, res, [], "Napaka API-ja pri iskanju dogodkov.");
      console.error(err);
    });
};

//ERROR handling
const prikaziNapako = (req, res, napaka) => {
  let naslov = "Nekaj je šlo narobe!";
  let vsebina = napaka.response.data["sporočilo"] ?
    napaka.response.data["sporočilo"] : (napaka.response.data["message"] ?
      napaka.response.data["message"] : "Nekaj nekje očitno ne deluje.");
  if (napaka.response.data["_message"] == "Lokacija validation failed") {
    //res.redirect(
    //'/instrukcije-dogodki/dodaj?napaka=vrednost'
    //);
    console.log("izpolni vsa polja");
  } else {
    res.render('error', {
      message: naslov,
      error: {
        status: vsebina,
        stack: "404 - user declared"
      }
    });
  }
};


//EXPORT functions
module.exports = {
  signup,
  signin,
  registerNewUser,
  loginUser,
  users,
  loginStatus
};