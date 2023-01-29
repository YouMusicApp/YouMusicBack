// import
const express = require("express");
const router = express.Router();

const { getAllArtists, createArtist, editArtist, deleteArtist } = require("../controller/artists.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back ARTISTS"
    })
});

router.get("/", getAllArtists)

router.post("/", createArtist)
router.patch('/:id', editArtist)
router.delete('/:id', deleteArtist)


module.exports = router;