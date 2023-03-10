// import
const express = require("express");
const router = express.Router();
const userController = require("../controller/users.controllers")
const { checkJwt } = require('../middlewares/check-middleware');


router.get('/checkuser/:email', userController.checkUser)

router.post('/createuser', userController.createUser)

router.patch('/edituser/:id', userController.editUser)






module.exports = router;