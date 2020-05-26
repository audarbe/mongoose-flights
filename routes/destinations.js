var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations')

//GET /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);
//DELETE flights/:id
router.delete('/flights/:id/:id', destinationsCtrl.delete);


module.exports = router;
