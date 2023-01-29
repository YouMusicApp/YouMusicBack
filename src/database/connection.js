const mongoose = require("mongoose");

const connection = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Success connection to DB");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;