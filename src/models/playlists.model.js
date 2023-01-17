const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
    userId: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    publicAccessible: {
        type: Boolean,
        default: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    tracks: {
        type: Array,
        default: []
    }

});

module.exports = model("Playlist", PlaylistSchema, "playlists");



