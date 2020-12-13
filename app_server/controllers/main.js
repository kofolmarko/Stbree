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






/* GET dashboard */
const dashboard = (req, res) => {
  res.render('dashboard', { title: "Nadzorna plošča" });
};

/* GET user profile */
const userProfile = (req, res) => {
  res.render('profile-user', { title: "Moj profil" });
};

/* GET profile for viewers */
const viewProfile = (req, res) => {
  res.render('profile-view', {
    ime: 'Janez',
    priimek: "Novak",
    email: "janez.novak@gmail.com",
    geslo: "password123",
    statusInstruktorja: false,
    datumVpisa: {
      $date: "2019-11-07T00:00:00Z"
    },
    dodatniPodatki: {
      opis: "Sem Janez in obožujem številke!",
      telefonskaStevilka: "041 532 234",
      ocena: 4
    }
  });
};

/* GET chat page */
const chat = (req, res) => {
  axios
  .get('http://localhost:3000/api/chat/' +  req.params.idUserja,{
    params: {
      idPrejemnika: req.query.idPrejemnika,
    }
  })
  .then((odgovor) => {
    //let nimasPogovora = (odgovor.data.komentar.length > 0) ? null : "Z osebo še nimate pogovora. Pošli novo sporočilo.";
    //console.log("nimaspogovora je:" + nimasPogovora);
      console.log("znotraj then in podatki so" + odgovor.data);
      prikaziChat(req, res, odgovor.data);
    })
    .catch((napaka) => {
    prikaziNapako(req, res, napaka);
  });
};

const prikaziChat = (req, res, pridobljeniPodatki) => {
  
  var matchingSporocila = new Array();
  
  var stevec = 0;
  for(var i = 0; i < pridobljeniPodatki.prviUser.poslanaSporocila.length; i++){
    if(pridobljeniPodatki.prviUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.drugiUser._id){
      matchingSporocila[stevec] = pridobljeniPodatki.prviUser.poslanaSporocila[i];
      stevec++;
    }
  }
  var nimasPogovora = (matchingSporocila.length > 0) ? null : "Z osebo še nimate pogovora. Pošli novo sporočilo.";

  for(var i = 0; i < pridobljeniPodatki.drugiUser.poslanaSporocila.length; i++){
    if(pridobljeniPodatki.drugiUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.prviUser._id){
      matchingSporocila[stevec] = pridobljeniPodatki.drugiUser.poslanaSporocila[i];
      stevec++;
    }
  }
  
  sortedSporocila = matchingSporocila.sort((a, b) => b.cas - a.cas);
  
  res.render('chat', { 
    title: "",
    
    sortedSporocilaa: sortedSporocila,
    mojId: pridobljeniPodatki.prviUser._id,
    kolegovId: pridobljeniPodatki.drugiUser._id,
    nimasPogovora: nimasPogovora,

    contacts: [{
      ime: "Steve Gates",
      slika: "/assets/pics/instruktor1.jpg"
    },
    {
      ime: "Billa Jobs",
      slika: "/assets/pics/instruktor3.jpg"
    },
    {
      ime: "Mark Zuki",
      slika: "/assets/pics/instruktor1.jpg"
    }
    ],

    contactChosen:{ 
      sporocila: [
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 1",
          cas: "16:20 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 2",
          cas: "16:23 | Nov 15"
        },
        {
          ime: "Billa Jobs",
          slika: "/assets/pics/instruktor3.jpg",
          besedilo: "besedilo sporocila 3",
          cas: "16:26 | Nov 15"
        }
      ]
    },

  });
};


const prikaziNapako = (req, res, napaka) => {
  console.log("znotrajjjjj prikaziii napakaaa");
  let naslov = "Nekaj je šlo narobe!";
  let vsebina = napaka.isAxiosError ? 
    "Napaka pri dostopu do oddaljenega vira preko REST API dostopa!" : 
    undefined;
  vsebina = (
      vsebina != undefined && 
      napaka.response && napaka.response.data["sporočilo"]
    ) ? napaka.response.data["sporočilo"] : vsebina;
  vsebina = (
      vsebina != undefined && 
      napaka.response && napaka.response.data["message"]
    ) ? napaka.response.data["message"] : vsebina;
  vsebina = (vsebina == undefined) ? 
    "Nekaj nekje očitno ne deluje." : vsebina;
  res.render('genericno-besedilo', {
    title: naslov,
    vsebina: vsebina
  });
};


JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};



// shrani poslano sporocilo

const shraniSporocilo = (req, res) => {
  const idUserja = req.params.idUserja;
  //console.log("v metodi shrani sporocilo sid userja je:"+ idUserja);
  console.log("v metodi shrani sporocilo id userja je:"+ idUserja);
  console.log("v metodi shrani req je:"+ req.query.idPrejemnika);
  //str = JSON.safeStringify(req);
  // str = JSON.stringify(req, null, 4); // (Optional) beautiful indented output.
  //console.log(str); // Logs output to dev tools console.
  //alert(str); // Displays output using window.alert()

  axios({
    method: 'post',
    url: 'http://localhost:3000/api/chat/' + idUserja,
    data: {
      besedilo: req.body.besedilo,
      prejemnikSporocila: req.query.idPrejemnika,
      cas: Date.now()
    }
  })
  .then(() => {
    console.log("nas sestavljen link je: " + '/sporocanje/' + idUserja + "?idPrejemnika=" + req.query.idPrejemnika);
    res.redirect("/sporocanje/" + idUserja + "?idPrejemnika=" + req.query.idPrejemnika);
  })
  .catch((napaka) => {
    prikaziNapako(req, res, napaka);
  });
};




module.exports = {
  dashboard,
  userProfile,
  viewProfile,
  chat,
  shraniSporocilo
};