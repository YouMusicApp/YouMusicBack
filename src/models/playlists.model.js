const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    thumbnail: {
        type: String,
        required: false
    },
    tracks: {
        type: Array,
        default: []
    }

});

module.exports = model("Playlist", PlaylistSchema, "playlists");



