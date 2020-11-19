/* GET jobs list page */
const jobsList = (req, res) => {
  res.render('jobs-list', {
    title: "Dela",
    dela: [{
      naziv: "Seminarska naloga pri biologiji",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dapibus orci, nec finibus risus scelerisque in. Vivamus auctor nisl et ex ornare, quis efficitur dui iaculis",
    }, {
      naziv: "Domača naloga v Javi",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dapibus orci, nec finibus risus scelerisque in. Vivamus auctor nisl et ex ornare, quis efficitur dui iaculis",
    }, {
      naziv: "Projekt - informatika",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dapibus orci, nec finibus risus scelerisque in. Vivamus auctor nisl et ex ornare, quis efficitur dui iaculis",
    }]
  });
};

/* GET job page */
const job = (req, res) => {
  res.render('job', {
    title: "Domača naloga v Javi",
    naziv: "Domača naloga v Javi",
    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dapibus orci, nec finibus risus scelerisque in. Vivamus auctor nisl et ex ornare, quis efficitur dui iaculis",
    cena: 3,
    datum: {
      $date: "2021-02-24T12:00:00Z"
    },
    ponudnik: {
      ime: "Janez",
      priimek: "Novak",
      opis: "Sem Janez in obožujem številke!",
      ocena: 4,
    }
  });
};

/* GET new job page */
const jobNew = (req, res) => {
  res.render('job-new', { title: "Dodaj" });
};

/* GET edit job page */
const jobUser = (req, res) => {
  res.render('job-edit', { title: "Uredi" })
}

module.exports = {
  jobsList,
  job,
  jobNew,
  jobUser
};