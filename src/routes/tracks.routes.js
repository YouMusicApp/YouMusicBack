// import
const express = require("express");
const router = express.Router();

const { getAllTracks, uploadTrack, deleteTrack } = require("../controller/tracks.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back TRACKS"
    })
});

router.get('/get', getAllTracks);
router.post('/', uploadTrack);
router.delete('/', deleteTrack);



module.exports = router;