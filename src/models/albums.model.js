const { Schema, model } = require("mongoose");

const AlbumSchema = Schema({
    name: {
        type: String,
        required: true
    },
    tracks: {
        type: Array,
        default: []
    },
    thumbnail: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
});

module.exports = model("Album", AlbumSchema, "albums");