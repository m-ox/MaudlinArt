const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
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
    },
    available: {
        type: String
    }
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;