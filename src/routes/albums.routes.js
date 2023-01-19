// import
const express = require("express");
const router = express.Router();

const albumController = require("../controller/albums.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back ALBUMS"
    })
});

router.get("/get", albumController.getAllAlbums)


module.exports = router;