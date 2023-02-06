// import
const express = require("express");
const router = express.Router();

const albumController = require("../controller/albums.controller")


router.get("/get", albumController.getAllAlbums)

router.post("/post", albumController.createAlbum)
router.patch('/:id', albumController.editAlbum)
router.delete('/:id', albumController.deleteAlbum)


module.exports = router;