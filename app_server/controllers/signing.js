//API connection
const axios = require('axios');

//API local parameters
var apiParametri = {
  streznik: 'http://localhost:3000'
};

//API Mogno Atlas parameters
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://stbree.herokuapp.com';
}


//RENDER signup page
const signup = (req, res, sporocilo) => {
  res.render('signup',
    {
      sporocilo: sporocilo
    });
};

//POST REGISTER a new user
const registerNewUser = (req, res) => {
  //console.log(req.body.instruktor.value);
  //const {ime, priimek} = req.body; -deconstruction
  if (!req.body.ime || !req.body.priimek || !req.body.email || !req.body.geslo || !req.body.gesloPotrdi) {
    console.log("Please complete the whole form.");
    var messageone = "Prosim izpolnite vsa polja.";
    signup(req, res, messageone);
  } else if (req.body.geslo != req.body.gesloPotrdi) {
    console.log("Passwords do not match!");
    var messagetwo = "Gesli se ne ujemata.";
    signup(req, res, messagetwo);
  } else {
    //console.log("Registering a new User to the database...");
    console.log(req.body);
    axios({
      method: 'post',
      url: apiParametri.streznik + '/api/uporabniki',
      data: {
        ime: req.body.ime,
        priimek: req.body.priimek,
        email: req.body.email,
        geslo: req.body.geslo,
        statusInstruktorja: req.body.statusInstruktorja
      }
    }).then((user) => {
      console.log("New user registered:");
      console.log(user.data);
      res.redirect('/prijava');
    }).catch((napaka) => {
      console.log("Neuspešna registracija");
      var message = "Uporabnik s podanim e-naslovom že obstaja.";
      signup(req, res, message);
      //prikaziNapako(req, res, napaka);
    });
  }
};

//GLOBAL LOGIN VARIABLES
let loginStatus = { val: false };
let loginID = { val: "henlo" };
let loginName = { val: null };

//IMPORT navbar switcher
const navbarToggle = require('../../public/javascripts/navbar-toggle');

//RENDER signin page
const signin = (req, res, sporocilo) => {
  res.render('signin',
    {
      sporocilo: sporocilo
    });
};

//SIGNOUT and RENDER landing
const signout = () => {
  loginStatus.val = false;
  loginID.val = null;
  loginName.val = null;
  navbarToggle(loginStatus.val);
};

//GET LOGIN a registered user
const loginUser = (req, res) => {
  if (!req.body.email || !req.body.geslo) {
    console.log("Prosim izpolnite vsa polja.");
  } else {
    const reqData = { email: req.body.email, geslo: req.body.geslo };
    //console.log(reqData);
    //console.log(reqData.email);
    axios.get(apiParametri.streznik + '/api/uporabniki/' + reqData.email,
      {
        email: reqData.email,
        geslo: reqData.geslo
      })
      .then((user) => {
        //console.log("NAZAJ NA SERVERJU");
        //console.log(user.data);

        if (user.data.geslo == reqData.geslo) {
          console.log(user.data.id);
          console.log(user.data.ime);
          loginStatus.val = true;
          loginID.val = user.data._id;
          loginName.val = user.data.ime;
          navbarToggle(loginStatus.val);
          res.redirect('/my');
        } else {
          var message = "Vnesena e-pošta ali geslo nista pravilna.";
          signin(req, res, message);
        }
      })
      .catch((napaka) => {
        //console.log("IZVEDBA CATCH");
        //console.log(napaka.data);
        if (napaka) {
          napaka = "Vnesena e-pošta ali geslo nista pravilna.";
          signin(req, res, napaka);
          //prikaziNapako(req, res, napaka);
        } else {
          console.log("cant find error");
        }

      });
  }
};

/*
//API GET list of all registered users
const users = (req, res) => {
  axios
    .get(apiParametri.streznik + '/api/instrukcije-dogodki')
    .then((odgovor) => {
      prikaziNapako(req, res, odgovor);
    })
    .catch((err) => {
      instructionsEventList(req, res, [], "Napaka API-ja pri iskanju dogodkov.");
      console.error(err);
    });
};
*/

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
  loginStatus,
  loginID,
  loginName,
  signout,
};