// Import
const Track = require("../models/tracks.model");


const getAllTracks = async (req, res) => {
    try {
        const tracks = await Track.find({});
        return res.status(200).json({
            status: "success",
            info: tracks,
            message: "Tracks are available in .tracks!"
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: error.message
        });
    }
}



// const getAllTracks = (req, res) => {
//     const tracks = Track.find({})

//     tracks.exec((error, data) => {
//         if (error || !data) {
//             return res.status(404).json({
//                 status: "error",
//                 mensaje: "Hay un error, o no se ha encontrado ninguna cancion"
//             })
//         }
//         return res.status(200).json({
//             status: "success",
//             info: data,
//             mensaje: "Las caciones estan disponibles en .tracks!"
//         })
//     })
// }

const uploadTrack = async (req, res) => {
    try {
        // recogemos los datos de la track
        const { body } = req;


        // Creamos el objeto track
        const track = new Track({ ...body });

        // guardamos la track en la base de datos
        const savedTrack = await track.save();

        //devolver la track
        return res.status(201).json({
            status: "success",
            info: savedTrack,
            message: "Track has been uploaded"
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        });
    }
}




// Export
module.exports = {
    getAllTracks,
    uploadTrack
}