const Artist = require("../models/artists.model");

const getAllArtists = (req, res) => {
    const artists = Artist.find({})

    artists.exec((error, data) => {
        if (error || null) {
            return res.status(404).json({
                status: "error",
                mensaje: "Artists not found"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            mensaje: "The songs are available in tracks"
        })
    })
}
// db.Student.find().lean().exec()

const createArtist = async (req, res) => {
    const { body } = req;
    try {
        const artist = new Artist({ ...body });
        await artist.save();
        res.status(201).json({ message: 'Successfully created artist', data: artist });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editArtist = async (req, res) => {
    const { body, params: { id } } = req;
    try {

        const artist = await Artist.findByIdAndUpdate({ _id: id }, { ...body });
        if (!artist) {
            res.status(404).json({ message: 'Artist not found' })
        } else {
            res.json({ message: 'Successfully updated artist', data: artist });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteArtist = async (req, res) => {
    const { body, params: { id } } = req;
    try {
        const artist = await Artist.findByIdAndRemove({ _id: id }, { ...body });
        if (!artist) {
            res.status(404).json({ message: 'Artist not found' })
        } else {
            res.json({ message: 'Artist deleted' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Export
module.exports = {
    getAllArtists,
    createArtist,
    editArtist,
    deleteArtist
}