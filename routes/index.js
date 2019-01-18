var express = require('express');
var router = express.Router();
const gifRouter = require('./gifs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/gif', gifRouter);

module.exports = router;
