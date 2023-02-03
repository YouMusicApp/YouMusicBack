const Genre = require("../models/genres.model");

const getAllGenres = (req, res) => {
    const genres = Genre.find({})

    genres.exec((error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                message: error.message
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            message: error.message
        })
    })
}


// Export
module.exports = {
    getAllGenres
}