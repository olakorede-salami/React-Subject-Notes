const mongoose = require('mongoose');

//Setting up Schema structure
const Schema = mongoose.Schema;

const date = new Date();

const SubjectDBSchema = new Schema({
    title: String,
    text: String,
    date: {
        type: Date,
        default: date.toGMTString()
    }
});


//Model
const SubjectDB = mongoose.model('SubjectDB', SubjectDBSchema)

module.exports = SubjectDB;
