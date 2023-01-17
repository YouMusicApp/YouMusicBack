const { Schema, model } = require("mongoose");

const TrackSchema = Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
});

module.exports = model("Track", TrackSchema, "tracks"); 