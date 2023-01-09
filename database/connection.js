const mongoose = require("mongoose");

const connection = async() => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/youmusic");
        console.log("Success connection to DB");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;