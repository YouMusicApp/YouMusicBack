const Artist = require("../models/artists.model");

const getAllArtists = (req, res) => {
    const artists = Artist.find({})

    artists.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .tracks!"
        })
    })
}



// Export
module.exports = {
    getAllArtists
}