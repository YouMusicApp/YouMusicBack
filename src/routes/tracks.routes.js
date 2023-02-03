// import
const express = require("express");
const router = express.Router();

const { getAllTracks, uploadTrack, deleteTrack } = require("../controller/tracks.controller")


router.get('/get', getAllTracks);
router.post('/', uploadTrack);
router.delete('/', deleteTrack);



module.exports = router;