const Playlist = require("../models/playlists.model");

const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({});
        return res.status(200).json({
            status: "success",
            info: playlists,
            message: "Playlists are available in .playlists!"
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: error.message
        });
    }
}

const createPlaylist = async (req, res) => {

    const { body } = req;
    console.log(body)
        
    try {
        const playlist = new Playlist({ ...body });
        await playlist.save();

        res.json({
            status: "success",
            data: playlist,
            message: "Playlist has been created"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            message: error.message
        });
    }
}

const addTrackToPlaylist = async (req, res) => {
    try {
        // recogemos los ids de la track y de la playlist
        const { trackId, playlistId } = req.body;

        // buscamos la playlist en la base de datos
        const playlist = await Playlist.findById(playlistId);

        //validamos que la playlist exista
        if (!playlist) {
            return res.status(404).json({
                status: "error",
                message: "Playlist not found"
            });
        }

        // añadimos la track al array de tracks de la playlist
        playlist.tracks.push(trackId);

        // guardamos los cambios en la base de datos
        const updatedPlaylist = await playlist.save();

        //devolver la playlist actualizada
        return res.status(200).json({
            status: "success",
            info: updatedPlaylist,
            message: "Track has been added to the playlist"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

const deletePlaylist = (req, res) => {
    const playlistId = req.params.id;
    Track.findByIdAndDelete(playlistId, (error, data) => {
        if (error || !data) {
            return res.status(404).json({
                status: "error",
                message: error.message
            });
        }
        return res.status(200).json({
            status: "success",
            message: "The playlist has been successfully deleted"
        });
    });
};


// Export
module.exports = {
    getAllPlaylists,
    createPlaylist,
    addTrackToPlaylist,
    deletePlaylist
}