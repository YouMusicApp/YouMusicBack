//importar 
const connection = require("./src/database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");

// const port = 4000;

// Config dotenv
dotenv.config();
// Connection db
connection();




// listen request
app.listen(process.env.PORT, () => {
    console.log("Server running at" + process.env.PORT);
})
