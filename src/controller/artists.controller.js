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

const createArtist = async (req, res) => {
    try {

        const { body } = req;

        const artist = new Artist({...body });

        await artist.save();
        res.status(201).json({ message: 'Artista creado exitosamente', data: artist });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el artista', error });
    }
};

const editArtist = async (req, res) => {
    try {
        const { name, genres, views, thumbnail } = req.body;
        const artist = await Artist.findById(req.params.id);
        if (!artist) res.status(404).json({ message: 'Artista no encontrado' });
        artist.name = name || artist.name;
        artist.genres = genres || artist.genres;
        artist.views = views || artist.views;
        artist.thumbnail = thumbnail || artist.thumbnail;
        await artist.save();
        res.json({ message: 'Artista actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el artista', error });
    }
};

const deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndRemove(req.params.id);
        if (!artist) res.status(404).json({ message: 'Artista no encontrado' });
        res.json({ message: 'Artista eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el artista', error });
    }
};

// Export
module.exports = {
    getAllArtists,
    createArtist,
    editArtist,
    deleteArtist
}