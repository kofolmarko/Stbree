/* GET instructors list page */
const instructorsList = (req, res) => {
  res.render('instructors-list', { title: "Inštruktorji" });
};

/* GET instructions events list page */
const instructionsEventList = (req, res) => {
  res.render('instructions-events-list', { title: "Instrukcije" });
};

/* GET instructions event page */
const instructionsEvent = (req, res) => {
  res.render('instructions-event', { title: "IME DOGODKA" });
};

/* GET new instructions page */
const instructionsEventNew = (req, res) => {
  res.render('instructions-event-new', { title: "Dodaj" });
};

/* GET edit instructions page */
const instructionsUser = (req, res) => {
  res.render('instructions-event-edit', { title: "Uredi" })
};

module.exports = {
  instructorsList,
  instructionsEventList,
  instructionsEvent,
  instructionsEventNew,
  instructionsUser
};