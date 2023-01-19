const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/users.routes");
const trackRouter = require("./routes/tracks.routes")
const artistRouter = require("./routes/artists.routes")
const playlistRouter = require("./routes/playlists.routes")
const albumRouter = require("./routes/albums.routes")
const genreRouter = require("./routes/genres.routes")

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
app.use("/api/artist", artistRouter);
app.use("/api/playlist", playlistRouter);
app.use("/api/album", albumRouter);
app.use("/api/genre", genreRouter);



module.exports = app;
