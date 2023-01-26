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

const deleteTrack = (req, res) => {
    const trackId = req.params.id;
    Track.findByIdAndDelete(trackId, (error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                message: error.message
            });
        }
        return res.status(200).json({
            status: "success",
            message: "The track has been successfully removed"
        });
    });
};





// Export
module.exports = {
    getAllTracks,
    uploadTrack,
    deleteTrack
}