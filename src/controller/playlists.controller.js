const { db } = require("../models/playlists.model");
const Playlist = require("../models/playlists.model");


async function createPlaylist(req, res, next) {
    try {
        const _id = req.headers._id;
console.log(_id);
        const playlistData = {
            userId: _id,
            name: req.body.name,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            tracks: req.body.tracks
        }

        await Playlist.create(playlistData);

        if (playlistData) {
            console.log(playlistData);
            const playlists = await Playlist.find(
                { userId: _id },
                {
                    name: 1,
                    description: 1,
                    thumbnail: 1,
                    tracks: 1
                }
            ).lean().exec();

            return res.status(201).send({
                success: 'Playlist created',
                data: playlists
            });
        } else {
            return res
                .status(400)
                .send({ error: 'error' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
        next(error);
    }
}

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