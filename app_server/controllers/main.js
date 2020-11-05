/* GET home page */
const index = (req, res) => {
    res.render('index', { title: 'Stbree' });
};

module.exports = {
    index
};