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
                mensaje: "En la consola esta la lista pisha!!"
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

const editUser = (req, res) => {
    let idUser = req.params.id;
    let params = req.body;

    User.findByIdAndUpdate(idUser, params, { new: true }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                response: false,
                mensaje: "No se ha editado el usuario"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            response: true,
            mensaje: "El usuario se ha editado correctamente"
        })
    })

}


// Export
module.exports = {
    checkUser,
    createUser,
    editUser
}
