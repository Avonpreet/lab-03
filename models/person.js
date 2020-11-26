const mongoose = require('mongoose');

//Our Schema
const PersonSchema = new mongoose.Schema
({
    name: {
        type:String,
        required:true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model
    ('Person', PersonSchema);