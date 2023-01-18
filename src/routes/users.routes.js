// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/users.controllers")


// Rutas de prueba
router.get("/prueba", (req,res) => {
    return res.json({
        mensaje: "hola desde una prueba del back USERS"
    })
});

router.get('/checkuser/:email', userController.checkUser)



module.exports = router;