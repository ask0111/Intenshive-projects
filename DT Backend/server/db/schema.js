const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    tagline:{
        type: String,
        required: true
    },
    schedule:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    file:{
        type: String,
        required: true
    },
    moderator:{
       
    },
    category:{
       
    },
    sub_category:{
        
    },
    rigor_rank: {
        type: Number,
        required: true
    },
    attendees:{
        
    }
});

module.exports = schema;