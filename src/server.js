const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/users.routes");
const trackRouter = require("./routes/tracks.routes")

// Crear servidor node
const app = express();

// Config cors
app.use(cors());

// Convertir body a obj js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load all ROUTES
app.use("/api/user", userRouter);
app.use("/api/track", trackRouter);


module.exports = app;
