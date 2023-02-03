// import
const express = require("express");
const router = express.Router();
const { checkJwt } = require('../middlewares/check-middleware');

const { getAllArtists, createArtist, editArtist, deleteArtist } = require("../controller/artists.controller")


router.get("/get", getAllArtists)

router.post("/", checkJwt, createArtist)
router.patch('/:id', editArtist)
router.delete('/:id', deleteArtist)


module.exports = router;