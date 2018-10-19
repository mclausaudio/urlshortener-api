const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/lilbit', {
    keepAlive: true,
    useNewUrlParser: true
});

module.exports.Link =require('./link');

