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
        ocena: data.ocena,
        datumVpisa: data.datumVpisa,
        email: data.email,
        statusInstruktorja: data.statusInstruktorja,
        dogodki: data.dogodki,
        dela: data.dela,
        isAdmin: req.params.idUporabnika === loginID.val
      }
      let sporocilo = "";
      console.log("Data :" + data)
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
        })
    });
  };

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
    //editProfile
  };
  