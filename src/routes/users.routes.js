// import
const express = require("express");
const router = express.Router();
const userController = require("../controller/users.controllers")



router.get('/checkuser/:email', userController.checkUser)

router.post('/createuser', userController.createUser)







module.exports = router;