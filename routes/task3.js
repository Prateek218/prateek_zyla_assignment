var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("Hello"+localStorage.getItem('task3'));
  res.render('task3', { title: 'Express' });
});

module.exports = router;
