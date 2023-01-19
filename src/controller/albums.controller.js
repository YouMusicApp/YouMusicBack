const Album = require("../models/albums.model");

const getAllAlbums = (req, res) => {
    const albums = Album.find({})

    albums.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ningun album"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Las caciones estan disponibles en .albums!"
        })
    })
}


// Export
module.exports = {
    getAllAlbums
}