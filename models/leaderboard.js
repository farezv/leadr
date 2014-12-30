var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeaderboardSchema = new Schema({
    name: String,
    stat_list: String
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);