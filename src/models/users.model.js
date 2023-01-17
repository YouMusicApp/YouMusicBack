const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    email: {
        type: String,
        required: true
    },
    userData: {
        username: {
            type: String,
            required: true,
            default: ""
        },
        complete_name: {
            type: String,
            default: ""
        },
        first_name: {
            type: String,
            default: ""
        },
        last_name: {
            type: String,
            default: ""
        },
        profilePicture: {
            type: String,
            default: "dafault.png"
        },
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    dateLastEdit: {
        type: Date,
        default: Date.now()
    },
    myplaylists: {
        type: Array,
        default: []
    },
    liked_tracks: {
        type: Array,
        default: []
    },
    liked_artist: {
        type: Array,
        default: []
    },
    liked_album: {
        type: Array,
        default: []
    },
    follows: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    }
});

module.exports = model("User", UserSchema, "users"); 