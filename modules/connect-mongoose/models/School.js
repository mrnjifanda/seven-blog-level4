const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: String,
    type: String,
    created: Date
});

const School = mongoose.model('School', SchoolSchema);
School.createCollection();

module.exports = School;
