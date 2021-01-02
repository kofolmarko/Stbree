/* GET landing page */
const landing = (req, res) => {
    res.render('landing', { title: 'Stbree'});
};

module.exports = {
    landing
};