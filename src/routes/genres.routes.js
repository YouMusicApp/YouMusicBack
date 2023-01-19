// import
const express = require("express");
const router = express.Router();

const genreController = require("../controller/genres.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back GERNRES"
    })
});

router.get("/get", genreController.getAllGenres)


module.exports = router;