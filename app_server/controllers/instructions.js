/* GET instructors list page */
const instructorsList = (req, res) => {
    res.render('instructors-list');
};

/* GET instructions events list page */
const instructionsEventList = (req, res) => {
    res.render('instructions-events-list');
};

/* GET instructions event page */
const instructionsEvent = (req, res) => {
    res.render('instructions-event');
};

/* GET new job page */
const instructionsEventNew = (req, res) => {
    res.render('instructions-event-new');
};

module.exports = {
    instructorsList,
    instructionsEventList,
    instructionsEvent,
    instructionsEventNew
};