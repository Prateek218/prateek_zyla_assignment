var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("Hello"+localStorage.getItem('task2'));
  res.render('task2', { title: 'Express' });
});

module.exports = router;
