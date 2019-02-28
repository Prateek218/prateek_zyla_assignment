var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');

router.get('/', function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    if(req.query.task == "task2" || req.query.task == "task3"){
        // console.log("getData"+localStorage.getItem(req.query.task));
        if(localStorage.getItem(req.query.task) == null ){
            res.end(JSON.stringify({data: null}, null, 4));
        }else{
            res.end(JSON.stringify({data: localStorage.getItem(req.query.task)}, null, 4));
        }
    }else{
        if(localStorage.getItem(req.query.task) == null ){
            res.end(JSON.stringify({data: null}, null, 4));
        }else{
            res.end(JSON.stringify({data: Number(localStorage.getItem(req.query.task))}, null, 4));
        }
    }
    
});

module.exports = router;