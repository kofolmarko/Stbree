const express = require('express');
const router = express.Router();

const ctrlDela = require('../controllers/job');

/* GET job list */
router.get('/ponudba-del', ctrlDela.dela);

/* POST new job */
router.post('/ponudba-del', ctrlDela.deloKreiraj);

/* GET job by ID */
router.get('/ponudba-del/delo/:idDela', ctrlDela.deloPreberi);

/* PUT job by ID */
router.put('/ponudba-del/delo/:idDela', ctrlDela.deloUredi);

/* DELETE job by ID */
router.delete('/ponudba-del/delo/:idDela', ctrlDela.deloIzbrisi);

//GET ordered by params
router.get('/ponudba-del/:parameter', ctrlDela.delaOrder);

module.exports = router;