// import
const express = require("express");
const router = express.Router();

const trackController = require("../controller/tracks.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back TRACKS"
    })
});

router.get("/get", trackController.getAllTracks)


module.exports = router;