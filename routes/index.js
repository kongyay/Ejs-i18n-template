var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hi' });
});
router.get('/switch/:lang', function(req, res, next) {
  var lang = req.params.lang;
  res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
  //res.setLocale(lang);
  res.send('Language switched to '+lang);
});

module.exports = router;
