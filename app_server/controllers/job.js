/* GET jobs list page */
const jobsList = (req, res) => {
    res.render('jobs-list');
};

/* GET job page */
const job = (req, res) => {
    res.render('job2');
};

/* GET new job page */
const jobNew = (req, res) => {
    res.render('job-new');
};

module.exports = {
    jobsList,
    job,
    jobNew
};