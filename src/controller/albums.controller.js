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

const createAlbum = async (req, res) => {
    try {

        const { name, genres, views, thumbnail } = req.body;

        const artist = new Artist({ name, genres, views, thumbnail });

        await artist.save();
        res.json({ message: 'Artista creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el artista', error });
    }
};

const editAlbum = async (req, res) => {
    try {
        const { name, tracks, thumbnail } = req.body;
        const artist = await Artist.findById(req.params.id);
        if (!artist) res.status(404).json({ message: 'Artista no encontrado' });
        artist.name = name || artist.name;
        artist.tracks = tracks || artist.tracks;
        artist.views = views || artist.views;
        artist.thumbnail = thumbnail || artist.thumbnail;
        await artist.save();
        res.json({ message: 'Artista actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el artista', error });
    }
};

const deleteAlbum = async (req, res) => {
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
    getAllAlbums,
    createAlbum,
    editAlbum,
    deleteAlbum
}