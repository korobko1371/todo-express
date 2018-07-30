var express = require('express');
var router = express.Router();

var businessController = require('../controllers/business');


router.put('/:_id', businessController.changeBusinessStatus);

module.exports = router;