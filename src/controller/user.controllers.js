

const prueba = (req, res) => {
    return res.status(200).json({
        hola: "esto funciona muy bien",
        mama: "papa"
    })
}


module.exports = {
    prueba
}
