const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    created: Date,
    id: Number
});

const User = mongoose.model('User', UserSchema);

User.createCollection();

module.exports = User;