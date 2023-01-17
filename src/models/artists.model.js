const { Schema, model } = require("mongoose");

const ArtistSchema = Schema({
    name: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: true,
        default: []
    },
    views: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        required: true
    },
    
});

module.exports = model("Artist", ArtistSchema, "artists"); 