var express = require('express');
var router = express.Router();
var modelLogin = require("../model/login")

var mysql = require('mysql'); //calling another file or exporting
// router.get('/', function(req, res) {
//   modelLogin.a("unkonow")
//     res.render('login');
//   });
  router.get('/', function(req, res) {
    modelLogin.a(modelLogin.pandy.name)
    res.render('login');
  } );
 

  var con = mysql.createConnection({
    host: "192.168.17.44",
    user: "sunny",
    password: "1234"
  });
  routes.get('/',function(req,res,next){
      con.connect(function(err){
          console.log("HARSH")
          console.log("connected");

      });
   //   modelLogin(login.a(model(login.pandy,name)
   console.log("himani")
   res.render('login');
  })
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
/* GET home page. */
router.get('/', function(req, res)  {
//   console.log(req);
console.log("I am fine")
  res.render('login');
});

// // using by get
router.get('/getLogin', function(req, res, next) {
    console.log(req.query);
    // res.render({"name":"himani"});
    res.json({"name":req.query.Ashu});
  });

  //by post
  // router.post('/getLogin', function(req, res, next) {
  //   console.log(re…