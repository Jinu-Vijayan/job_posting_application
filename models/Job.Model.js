const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    "title" : {
        type : String,
        required : true
    },
    "description" : {
        type : String,
        default : ""
    },
    "salary" : {
        type : Number,
        default : 0
    },
    "company" : {
        type : String,
        required : true
    },
    "location" : {
        type : String,
        required : true
    }
});

const JobModel = mongoose.model("jobs",JobSchema)

module.exports = JobModel;