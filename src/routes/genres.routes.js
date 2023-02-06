// import
const express = require("express");
const router = express.Router();

const genreController = require("../controller/genres.controller")


router.get("/get", genreController.getAllGenres)


module.exports = router;