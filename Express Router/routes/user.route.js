var express = require('express');
// var db = require('../db')
var controller = require('../controllers/user.controller');

var shortid = require('shortid')
var router = express.Router();

router.get('/home', controller.home);

router.get('/', controller.index);

// Search
router.get('/search', controller.search);

// Create
router.get('/create', controller.create);

router.get('/:id', controller.get);

// Post Method
router.post('/create', controller.postCreate);

module.exports = router;
