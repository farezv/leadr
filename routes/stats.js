var express = require('express');
var router = express.Router();

/* GET user stats. */
router.get('/:username', function(req, res) {
    res.send('Getting stats for: ' + req.body.username);
});

module.exports = router;
