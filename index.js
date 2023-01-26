//importar 
const connection = require("./src/database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");

const port = 4000;

// Config dotenv
dotenv.config();
// Connection db
connection();




// listen request
app.listen(port, () => {
    console.log("Estoy escuchando en el puerto " + process.env.SERVER_PORT);
})
