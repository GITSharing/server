var express = require('express');
var router = express.Router();
const gifRouter = require('./gifs');
const {UserController} = require('../controllers')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', UserController.create )
router.use('/gif', gifRouter);

module.exports = router;
