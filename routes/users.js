var express = require('express'); 
var router = express.Router();

var chatHistory = [];
var nicknames = [];
var anzmsg = 0;

router.get('/', function (req, res, next) { 
  res.json({ message: 'fhs chat-app api works...' }); 
});

//history
router.get('/history', function (req, res, next) { 
  res.send(chatHistory); 
});

router.post('/history', function (req, res, next) {
  var date = new Date();

  chatHistory.push({ username: req.body.username, content: req.body.content, timestamp: req.body.timestamp, color: req.body.color });
  
  res.json({ message: 'History created!' });
});

//nicknames
router.get('/nicknames', function (req, res, next) {
  res.send(nicknames);
});


router.get('/nicknames/:id', function (req, res, next) {
  let found = false;
  for (var i = 0; nicknames.length > 0 && !found; i++) {
      var nickname = nicknames[i];

      if (nickname && nickname.id == req.params.id) {//attention: id is a string ...
          found = true;
          res.send({ username: nickname.username, id: nickname.id });
      }
  }
});

router.post('/nicknames', function (req, res, next) {
  console.log(req.body);
  nicknames.push({ username: req.body.username, id: nicknames.length + 1 });

  res.json({ username: req.body.username });
});

router.post('/changenickname', function (req, res, next) {
  var idnickname = nicknames.indexOf(nicknames.find(username => username.username === req.body.usernameold));
  nicknames[idnickname].username = req.body.username;
  res.json({ message: "Nickname changed"});
});

router.get('/historylength', function (req, res, next) {
  anzmsg = chatHistory.length
  res.send({'historylength': anzmsg});
});

module.exports = router;