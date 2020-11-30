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

const loginID = require('./signing').loginID;

const renderProfile = (req, res) => {
    axios.get("http://localhost:3000/api/uporabnik/" + req.params.idUporabnika)
    .then(({data}, err) => {
      console.log(data);
      const profileDetails = {
        ime: data.ime,
        priimek: data.priimek,
        opis: data.opis,
        telefonskaStevilka: data.telefonskaStevilka,
        datumVpisa: data.datumVpisa,
        email: data.email,
        statusInstruktorja: data.statusInstruktorja,
        dogodki: data.dogodki,
        dela: data.dela,
        isAdmin: req.params.idUporabnika === loginID.val
      };
      let sporocilo = "";
      console.log("Data :" + data);
      res.render('profile', {
          profileDetails: profileDetails, 
          sporocilo: sporocilo});
    })
    .catch((err) => {
        let sporocilo = "User not good";
        res.render('profile',{
            profileDetails: {
               
            },
            sporocilo: sporocilo
        });
    });
  };

  /*PUT edit instructions event
const editProfile = (req, res) => {
  console.log("Inside controllers on server-side!");
  console.log(req.body);
  axios
    .put('http://localhost:3000/api/uporabnik/' + req.params.idUporabnika,
      {
        email: req.body.email,
        telefonskaStevilka: req.body.email,
        opis: req.body.opis,
        geslo: req.body.geslo,
        statusInstruktorja: req.body.statusInstruktorja,
        idInstruktorja: require('./signing').loginID.val
      }
    )
    .then((dogodek) => {
      console.log(dogodek);
      res.status(200).json(dogodek);
    })
    .catch((napaka) => {
      console.log(napaka);
      prikaziNapako(req, res, napaka);
    });
};*/
  /*
  function editProfile(data) {
      axios.put("http://localhost:3000/api/uporabnik/posodobi/" + loginID, {
        email: data.email,
        telefonskaStevilka: data.telefonskaStevilka,
        statusInstruktorja: data.statusInstruktorja,
        datumVpisa: data.datumVpisa,
        opis: data.opis,
        geslo: data.geslo
      })
      .then(({data}, err) => {
        document.location.reload();
        let sporocilo = "";
        console.log("Data :" + data)
      })
      .catch((err) => {
          let sporocilo = "User not good";
      });
    };*/

  module.exports = {
    renderProfile,
  };