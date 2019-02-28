var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
/* GET home page. */
router.post('/', function(req, res, next) {
    if(req.body.task == "task2" || req.body.task == "task3"){
        localStorage.setItem(req.body.task, req.body.position);
        // console.log("Hi Data Reecived"+localStorage.getItem(req.body.task));
    }else{
        localStorage.setItem(req.body.task, req.body.position);
        // console.log("Hi Data Reecived"+localStorage.getItem(req.body.task));
    }
    res.end();
//   res.render('index', { title: 'Express' });
});

module.exports = router;