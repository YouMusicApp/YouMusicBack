// import
const express = require("express");
const router = express.Router();
// const { checkJwt } = require("./middlewares/check-middleware");

const userController = require("../controller/users.controllers")
const { checkJwt } = require('../middlewares/check-middleware');

// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back USERS"
    })
});
//jwtCheck
router.get('/checkuser/:email', userController.checkUser)

router.post('/createuser', userController.createUser)

router.put('/edituser/:id', checkJwt, userController.editUser)




module.exports = router;