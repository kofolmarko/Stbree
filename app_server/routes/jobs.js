/* Router import */
var express = require('express');
var router = express.Router();

const ctrlJob = require('../controllers/job');

/* GET job list */
router.get('/ponudba-del', ctrlJob.jobList);

/* GET job info */
router.get('/ponudba-del/delo/:idDela', ctrlJob.job);

//PUT signup for a job
router.get('/ponudba-del/delo/:idDela/prijava', ctrlJob.jobSignup);

//PUT cancel job
router.get('/ponudba-del/delo/:idDela/odjava', ctrlJob.jobLeave);

/* POST job */
router
    .route('/ponudba-del/dodaj')
    .get(ctrlJob.jobNew)
    .post(ctrlJob.jobNewPost);

/* PUT job (edit) */
router.put('ponudba-del/delo/:idDela', ctrlJob.jobEdit);

/* DELETE job */
router.delete('/ponudba-del/delo/:idDela', ctrlJob.jobDelete);

module.exports = router;