const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    originalUrl: {
        type: String, 
        required: true
    },
    shortId: {
        type: String, 
        required: true
    }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;