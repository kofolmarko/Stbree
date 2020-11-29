//ROUTER import
var express = require('express');
var router = express.Router();


//Controller constant to access functions
const ctrlJob = require('../controllers/job');


//GET job events list
router.get('/ponudba-del', ctrlJob.jobList);

//GET job event info
router.get('/ponudba-del/delo/:idDela', ctrlJob.job);

//POST new job event
router
    .route('/ponudba-del/dodaj')
    .get(ctrlJob.jobNew)
    .post(ctrlJob.jobNewPost);

//PUT edit job event info
router.put('/ponudba-del/delo/:idDela', ctrlJob.jobEdit);

//DELETE job event
router.delete('/ponudba-del/delo/:idDela', ctrlJob.jobDelete);

//ROUTER export
module.exports = router;