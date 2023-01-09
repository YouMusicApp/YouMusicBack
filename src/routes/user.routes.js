// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controllers")


// Rutas de prueba
router.get("/prueba", userController.prueba);


module.exports = router;