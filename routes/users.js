var express = require('express');
var router = express.Router();

var chatHistory = [];
var nicknames = [];
var newmessages = false;

/*router.get('/', function (req, res, next) {
  res.json({ message: 'fhs chat-app api works...' });
});*/


router.get('/history', function (req, res, next) {
  res.send(chatHistory);
});

router.get('/', function (req, res, next) {
  res.json({ change: newmessages });
});


router.post('/history', function (req, res, next) {
  var date = new Date();
  chatHistory.push({ nickname: req.body.username, message: req.body.content, date: req.body.timestamp });
  res.json({ message: 'History created!' });
  newmessages = true;
});

module.exports = router;