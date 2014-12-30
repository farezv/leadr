var express = require('express');
var router = express.Router();
var Stat = require('../models/stat');

/* GET leaderboard for a stat. */
router.get('/:statname', function(req, res) {
    console.log('Getting stats for: ' + req.params.statname);
    // Check input
    if(req.params.statname != null) {
        Stat.find( { name: req.params.statname }, function(err, stats) {
            res.json(stats);
        });
    } else res.json({message: 'Please use a valid stat name'});
});

module.exports = router;
