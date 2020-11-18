/* GET jobs list page */
const jobsList = (req, res) => {
  res.render('jobs-list');
};

/* GET job page */
const job = (req, res) => {
  res.render('job');
};

/* GET new job page */
const jobNew = (req, res) => {
  res.render('job-new');
};

/* GET edit job page */
const jobUser = (req, res) => {
  res.render('job-edit')
}

module.exports = {
  jobsList,
  job,
  jobNew,
  jobUser
};