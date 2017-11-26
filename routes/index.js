var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/dashboard', function(req, res){
  res.render('dashboard', {title: 'dashboard'})
});

router.get('/map', function(req, res){
  res.render('map', {title: "maps"})
});


module.exports = router;
