const { Schema, model } = require("mongoose");

const GenreSchema = Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = model("Genre", GenreSchema, "genres"); 