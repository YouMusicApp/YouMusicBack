const mongoose = require("mongoose");

const connection = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect('mongodb+srv://YouMusicApp:*C4Y$PZ^xYPU@youmusicapp.c2exnb8.mongodb.net/YouMusicApp');
        console.log("Success connection to DB");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;