var express = require('express');
var router = express.Router();
var Stat = require('../models/stat');

/* GET user stats. */
router.get('/:username', function(req, res) {
    console.log('Getting stats for: ' + req.params.username);
    // Check input
    if(req.params.username != null) {
        Stat.find( { uid: req.params.username }, function(err, stats) {
            res.json(stats);
        });
    } else res.json({message: 'Please use a valid username'});
});

/* POST user stats. */
router.post('/sendStat', function(req, res) {
    var stat = new Stat();

    // Check errors & initialize stat fields
    if(req.body.name != null) {
        stat.name = req.body.name; // stat name
    }
    if(req.body.uid != null) {
        stat.uid = req.body.uid; // uid stat belongs to
    }
    if(req.body.value != null) {
        stat.value = req.body.value; // stat value
    }
    if(req.body.created_at != null) {
        stat.created_at = req.body.created_at; // stat creation date
    }
    console.log(req.body);

    stat.save(function(err) {
        if(err) {
            res.send(err);
        } else res.json({message: 'Stat sent!' });
    });
});

module.exports = router;
