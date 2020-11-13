/* GET dashboard */
const dashboard = (req, res) => {
    res.render('dashboard');
};

/* GET user profile */
const userProfile = (req, res) => {
    res.render('profile-user');
};

/* GET profile for viewers */
const viewProfile = (req, res) => {
    res.render('profile-view');
};

/* GET chat page */
const chat = (req, res) => {
    res.render('chat');
};

module.exports = {
    dashboard,
    userProfile,
    viewProfile,
    chat
};