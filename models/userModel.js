var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true},
    address: {type: String, required: true},
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;