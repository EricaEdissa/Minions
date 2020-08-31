var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/reserve', function(req, res, next) {
  res.send({
    message:'Parabéns! Seu produto está reservado!'
  });
});

module.exports = router;
