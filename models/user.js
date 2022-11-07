const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = Schema({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    postal: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', user);