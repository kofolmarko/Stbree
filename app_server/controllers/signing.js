/* GET signin page */
const signin = (req, res) => {
    res.render('signin');
};

/* GET signup page */
const signup = (req, res) => {
    res.render('signup');
};

module.exports = {
    signin,
    signup
};