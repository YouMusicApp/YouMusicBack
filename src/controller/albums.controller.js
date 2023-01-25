const Album = require("../models/albums.model");

const getAllAlbums = (req, res) => {
    const albums = Album.find({})

    albums.exec((error, data) => {
        if (error || null) {
            return res.status(404).json({
                status: "error",
                message: "Album not found"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "The albums are available in albums"
        })
    })
}

const createAlbum = async (req, res) => {
    const { body } = req;
    try {
        const album = new Album({ ...body });

        await artist.save();
        res.json({ message: 'Successfully created artist', data: album });
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