var express = require('express');
var router = express.Router();

/* GET leaderboard for statname. */
router.get('/leaderboard/:statname', function(req, res) {
  res.send('Getting leaderboard for: ' + req.body.statname);
});

module.exports = router;
