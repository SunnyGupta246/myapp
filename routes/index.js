var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);//print the req
  res.json({name:"Saurav"});//send the response to the server basically a (Get request) 
  // res.render('index', { title: 'Express' });
  //hehehe cheking for push
});

module.exports = router;
