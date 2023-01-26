// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/users.controllers")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back USERS"
    })
});
 //jwtCheck
router.get('/checkuser/:email', userController.checkUser)

router.post('/createuser', userController.createUser)

router.put('/edituser/:id', userController.editUser)




module.exports = router;