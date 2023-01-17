// Import 
const Track = require("../models/tracks.model");

const getAllTracks = (req, res) => {
    const tracks = Track.find({})

    tracks.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
            })
        }
        return res.status(200).json({
            status: "success",
            tracks: data,
            mensaje: "Las caciones estan disponibles en .tracks!"
        })
    })
}






// Export
module.exports = {
    getAllTracks
}