var express = require('express');
var router = express.Router();

/* GET users. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET single user on team id */
router.get('/:team/:id', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST New user. */
router.post('/:team/new', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
