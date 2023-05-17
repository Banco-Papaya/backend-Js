
const Auditoria = async (req, res, next) => {
    req.body.fechaActualizacion  =  new Date()
    next()
}

module.exports = {
    Auditoria
}