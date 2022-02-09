'use strict';

const Mongoose = require('mongoose');

const connectToMongo = async mongoURI => {
    try {
        await Mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (err) {
        throw err;
    }
};

module.exports = connectToMongo;
