/* GET dashboard */
const dashboard = (req, res) => {
  res.render('dashboard', { title: "Nadzorna plošča" });
};


/* GET chat page */
const chat = (req, res) => {
  res.render('chat', { title: "Sporočila" });
};

module.exports = {
  dashboard,
  chat
};