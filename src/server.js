const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();

// Config cors
app.use(cors());

// Convertir body a obj js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Crear rutas
app.use("/user", userRouter);



module.exports = app;
