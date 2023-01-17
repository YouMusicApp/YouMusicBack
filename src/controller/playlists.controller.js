const Playlist = require("../models/playlists.model");

const getAllPlaylists = (req, res) => {
    const playlists = Playlist.find({})

    playlists.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna playlist"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .playlists!"
        })
    })
}


// Export
module.exports = {
    getAllPlaylists
}