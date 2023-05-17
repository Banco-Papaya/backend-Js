const validaciones = require("../middleware/validacion.middleware")
const { body, query } = require("express-validator")
const { buscarXnumerodoc, buscarXcorreo } = require("../servicios/contadores.servicio.js")
const { listarPlanes } = require("../servicios/planes.servicio")



const valRegistrarContador = validaciones([
    body("plan")
        .exists().withMessage("El plan es requerido")
        .isLength({ min: 1 }).withMessage("El plan no puede estar vacio")
        .custom((value) => {
            return new Promise(async (resolve, reject) => {
                const planes = await listarPlanes({ _id: value })
                if (planes.length === 0) {
                    reject("El plan no existe")
                } else {
                    resolve()
                }
            })
        }),

    body("celular").exists().withMessage("El numero de celular es requerido")
        .isLength({ min: 1 }).withMessage("El numero de celular debe de tener al menos un caracter"),

    body("nombre").exists().withMessage("el nombre es requerido")
        .isLength({ min: 1 }).withMessage("El nombre debe de tener almenos un caracter"),

    body("tipoDocumento").isIn(["CC", "CE"]).withMessage("el tipo de documento debe ser (CC, CE)"),

    body("numeroDocumento").exists().withMessage("el numero de documento es requerido")

        .isLength({ min: 1 }).withMessage("El numero de documento debe de tener almenos un caracter")
        .isNumeric().withMessage("El numero de documento debe de ser nuemro")
        .custom((value, { req }) => {
            return new Promise(async (resolve, reject) => {
                const numeroDocumento = await buscarXnumerodoc(value)
                if (numeroDocumento.length == 0) {
                    resolve()
                } else {
                    reject("El numero de documento se encuentra registrado")
                }
            })
        }),

    body("correo").isEmail().withMessage("el correo no es un correo valido")
        .custom((value, { req }) => {
            return new Promise(async (resolve, reject) => {
                const correo = await buscarXcorreo(value)
                if (correo.length == 0) {
                    resolve()
                } else {
                    reject("El correo se encuentra registrado")
                }
            })
        }),

    body("clave").isLength({ min: 6 }).withMessage("La clave debe tener al menos 6 caracteres")
        .exists().withMessage("La clave es obligatoria")

])

const valActualizarContador = validaciones([

    body("plan")
        .exists().withMessage("El plan es requerido")
        .isLength({ min: 1 }).withMessage("El plan no puede estar vacio")
        .custom((value) => {
            return new Promise(async (resolve, reject) => {
                const planes = await listarPlanes({ _id: value })
                if (planes.length === 0) {
                    reject("El plan no existe")
                } else {
                    resolve()
                }
            })
        }),

    body("celular").exists().withMessage("El numero de celular es requerido")
        .isLength({ min: 1 }).withMessage("El numero de celular debe de tener al menos un caracter"),

    body("nombre").exists().withMessage("el nombre es requerido")
        .isLength({ min: 1 }).withMessage("El nombre debe de tener almenos un caracter"),

    body("tipoDocumento").isIn(["CC", "CE"]).withMessage("el tipo de documento debe ser (CC, CE)"),

    body("numeroDocumento").exists().withMessage("el numero de documento es requerido")

        .isLength({ min: 1 }).withMessage("El numero de documento debe de tener almenos un caracter")
        .isNumeric().withMessage("El numero de documento debe de ser nuemro")
        .custom((value, { req }) => {
            return new Promise(async (resolve, reject) => {
                const numeroDocumento = await buscarXnumerodoc(value)
                if (numeroDocumento.length == 0) {
                    resolve()
                } else {
                    if (numeroDocumento[0].numeroDocumento === value) {
                        resolve()
                    } else {
                        reject("El numero de documento se encuentra registrado")
                    }

                }
            })
        }),

    body("correo").isEmail().withMessage("el correo no es un correo valido")
        .custom((value, { req }) => {
            return new Promise(async (resolve, reject) => {
                const correo = await buscarXcorreo(value)
                if (correo.length == 0) {
                    resolve()
                } else {
                    if (correo[0].correo === value) {
                        resolve()
                    } else {
                        reject("El correo se encuentra registrado")
                    }
                }
            })
        }),

])

module.exports = {
    valRegistrarContador,
    valActualizarContador
}