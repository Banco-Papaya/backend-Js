const servicio = require("../servicios/empleado.servicio");
const {encryptSHA1} = require("../utilidades/sha1")

const { Auditoria } = require("../middleware/auditoria.milddleware");

const getAll = async (req, res) => {
  res.send(await servicio.GetAll());
}
const getById = async (req, res) => {
  res.send(await servicio.GetById(req.params.id));
}
const agregarEmpleado = async (req, res) => {
  req.body.clave = encryptSHA1(req.body.clave)
  res.send(await servicio.agregarEmpleado(req.body));
}
const actualizarEmpleado = async (req, res) => {
  delete req.body.clave
  res.send(await servicio.actualizarEmpleadoByID(req.params.id,req.body));
}
const eliminarEmpleado = async (req, res) => {
  res.send(await servicio.actualizarEmpleadoByID(req.params.id,{state: false,
    fechaActualizacion: new Date()}));
}
const RestablecerPasswrodEmpleado = async (req, res) => {
  req.body.clave = encryptSHA1(req.body.clave)
  res.send(await servicio.actualizarEmpleadoByID(req.params.id,{clave: req.body.clave,
    fechaActualizacion: new Date()}));
}

module.exports = {
  getAll,
  getById,
  agregarEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
  RestablecerPasswrodEmpleado
};
