/* GET signin page */
const signin = (req, res) => {
    res.render('signin', { title: "Prijava" });
};

/* GET signup page */
const signup = (req, res) => {
    res.render('signup', { title: "Registracija" });
};

module.exports = {
    signin,
    signup
};