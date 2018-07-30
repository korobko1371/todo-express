var express = require('express');
var router = express.Router();

var categoriesController = require('../controllers/categories');

router.get('/', categoriesController.all);
//router.get('/:name', categoriesController.getCategory);

router.post('/', categoriesController.addCategory);
router.post('/:name', categoriesController.addBusinessIntoCategory);
router.delete('/', categoriesController.deleteCategory);


module.exports = router;
