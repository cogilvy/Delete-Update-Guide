var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights.js')

/* GET users listing. */
router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.get('/:id', flightCtrl.show);
router.post('/', flightCtrl.create);
router.delete('/:id', flightCtrl.delete);

module.exports = router;
