var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*Creating a new route to the JSON */
//time is a parameter
 router.get('/:time', function(req, res){
  function unixToNatural(unix){
    var date = new Date(unix*1000);
    var months = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[date.getMonth()];
    var day = date.getDay();
    var year = date.getFullYear();

    var result = month + ' ' + day + ', ' + year;
    return result;

  }

   if(!isNaN(req.params.time)){
     var result = unixToNatural(req.params.time);
     var data = {"unix": req.params.time,  "natural": result};
     res.json(data);

   }
 }); 

module.exports = router;
