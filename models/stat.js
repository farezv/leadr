var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatSchema = new Schema({
    statid: Number,
    name: String,
    uid: String,
    value: Number,
    created_at: String
});

module.exports = mongoose.model('Stat', StatSchema);