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


////////////////////////////////////////////////////////////////

// const editPost = (req, res) => {
//     // recogemos id
//     let idPost = req.params.id;

//     // recogemos datos body
//     let params = req.body;

//     // validamos datos
//     try {
//         validatePost(params);
//     } catch (error) {
//         return res.status(400).json({
//             status: "error",
//             mensaje: "Los datos no estan validados"
//         })
//     }
//     // Buscamos el post y lo actualizamos
//     Post.findOneAndUpdate({ _id: idPost }, params, { new: true }, (error, postEdited) => {
//         if (error || !postEdited) {
//             return res.status(400).json({
//                 status: "error",
//                 mensaje: "Error al editar post"
//             })
//         }
//         // devolvemos respuesta
//         return res.status(200).json({
//             status: "success",
//             postEdited,
//             mensaje: "El post se ha editado correctamente"
//         });
//     })
// }


// Export
module.exports = {
    checkUser,
    createUser
}
