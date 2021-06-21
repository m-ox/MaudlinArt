const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3
    },
    url: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    medium: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Artwork = mongoose.model('Artwork', userSchema);

module.exports = Artwork;