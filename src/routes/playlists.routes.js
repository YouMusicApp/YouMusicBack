// import
const express = require("express");
const router = express.Router();

const { getAllPlaylists, createPlaylist, addTrackToPlaylist, deletePlaylist } = require("../controller/playlists.controller")
const {editUser} = require("../controller/users.controllers")


router.get("/get", getAllPlaylists);
router.post("/newPlaylist/:id", createPlaylist);
router.patch("/", addTrackToPlaylist);
router.delete("/", deletePlaylist);



module.exports = router;