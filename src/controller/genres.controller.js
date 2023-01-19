const Genre = require("../models/genres.model");

const getAllGenres = (req, res) => {
    const genres = Genre.find({})

    genres.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                mensaje: "Hay un error, o no se ha encontrado ninguna genero"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "Los generos estan disponibles en .genres!"
        })
    })
}


// Export
module.exports = {
    getAllGenres
}