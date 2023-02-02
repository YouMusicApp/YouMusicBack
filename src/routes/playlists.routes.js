// import
const express = require("express");
const router = express.Router();

const { getAllPlaylists, createPlaylist, addTrackToPlaylist, deletePlaylist } = require("../controller/playlists.controller")
const {editUser} = require("../controller/users.controllers")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back PLAYLIST"
    })
});

router.get("/get", getAllPlaylists);
router.post("/newPlaylist/:id", createPlaylist);
router.patch("/", addTrackToPlaylist);
router.delete("/", deletePlaylist);



module.exports = router;