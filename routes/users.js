var express = require('express');
var router = express.Router();
var chatHistory = [];
var nickname = [];

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get('/', function (req, res, next) {
  res.json({message: 'fhs chat-app api works...'});
});

module.exports = router;
