// Import
const User = require("../models/users.model");

const checkUser = (req, res) => {
    const params = req.params

    User.find({ email: params.email }, (error, data) => {
        if (error || !data) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error al buscar"
            })
        }
        if (!!data.length) {
            console.log('El usuario existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "En la consola esta la lista"
            })
        } else {
            console.log('El usuario no existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: false,
                mensaje: "Ese email no esta en la bbdd"
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
                    mensaje: "No se ha guardado el post"
                })
            }
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El post ha sido guardado"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post"
        })
    }
}

const editUser = async (req, res, next) => {
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
        next(error);
    }

}




// Export
module.exports = {
    checkUser,
    createUser,
    editUser
}
