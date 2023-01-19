//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");

const port = 4000;

// Config dotenv
dotenv.config();
// Conexion a la DB
connection();




// Escuchar peticiones
app.listen(port, () => {
    console.log("Estoy escuchando en el puerto " + process.env.SERVER_PORT);
})