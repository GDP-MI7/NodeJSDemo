var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title:  String,
  author: String,
  body:   String
});

module.exports = mongoose.model('User', userSchema);