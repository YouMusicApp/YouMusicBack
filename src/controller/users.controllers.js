// Import
const User = require("../models/users.model");

const checkUser = (req, res) => {
    const params = req.params

    User.find({ email: params.email }, (error, data) => {
        if (error || !data) {
            return res.status(500).json({
                status: "error",
                message: error.message
            })
        }
        if (!!data.length) {
            console.log('El usuario existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: data,
                message: error.message
            })
        } else {
            console.log('El usuario no existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: false,
                message: error.message
            })
        }
    })
}

const createUser = (req, res) => {
    try {
        // recogemos los params del body
        let params = req.body;

        // validamos datos (con la funcion que tenemos en la carpeta helper)

        // Creamos el objeto a guardar
        const $user = new User(params)

        // guardar el articulo en la ddbb
        $user.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    message: error.message
                })
            }
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                message: error.message
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

const editUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const user = await User.findByIdAndUpdate({ _id: id }, { ...body });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json({ message: 'Successfully updated user' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}




// Export
module.exports = {
    checkUser,
    createUser,
    editUser
}
