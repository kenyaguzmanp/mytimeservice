var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*Creating a new route to the JSON */
//time is a parameter
 router.get('/:time', function(req, res){
   var data = { time: req.params.time };
   res.json(data);
 }); 

module.exports = router;
