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
        await album.save();
        res.json(201).json({ message: 'Successfully created album', data: album });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editAlbum = async (req, res) => {
    const { body, params: { id } } = req;
    try {
        const album = await Album.findByIdAndUpdate({ _id: id }, { ...body });
        if (!artist) {
            res.status(404).json({ message: 'Album not found' });
        } else {
            res.json({ message: 'Successfully updated album' });

        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAlbum = async (req, res) => {
    const { body, params: { id } } = req;
    try {
        const album = await Album.findByIdAndRemove({ _id: id }, { ...body });
        if (!album) {
            res.status(404).json({ message: 'Album not found' });
        } else {
            res.json({ message: 'Album deleted' });

        }
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};




// Export
module.exports = {
    getAllAlbums,
    createAlbum,
    editAlbum,
    deleteAlbum
}