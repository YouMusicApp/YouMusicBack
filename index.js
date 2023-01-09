//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");


// Config dotenv
dotenv.config();

// Conexion a la DB
connection();

const port = 4000;



// Escuchar peticiones
app.listen(port, () => {
    console.log("Estoy escuchando en el puerto " + process.env.PORT);
})