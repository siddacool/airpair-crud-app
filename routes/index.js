var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD app Skeleton using ejs' });
});

module.exports = router;
