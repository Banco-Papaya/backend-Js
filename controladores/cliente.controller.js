const servicio = require("../servicios/cliente.servicio");
const {encryptSHA1} = require("../utilidades/sha1")

const getAll = async (req, res) => {
  res.send(await servicio.GetAll());
}
const getById = async (req, res) => {
  res.send(await servicio.GetById(req.params.id));
}
const agregarCliente = async (req, res) => {
  req.body.clave = encryptSHA1(req.body.clave)
  res.send(await servicio.agregarCliente(req.body));
}
const actualizarCliente = async (req, res) => {
  delete req.body.clave
  res.send(await servicio.actualizarClienteByID(req.params.id,req.body));
}
const eliminarCliente = async (req, res) => {
  res.send(await servicio.actualizarClienteByID(req.params.id,{state: false,
    fechaActualizacion: new Date()}));
}
const RestablecerPasswrodCliente = async (req, res) => {
  req.body.clave = encryptSHA1(req.body.clave)
  res.send(await servicio.actualizarClienteByID(req.params.id,{clave: req.body.clave,
    fechaActualizacion: new Date()}));
}

module.exports = {
  getAll,
  getById,
  agregarCliente,
  actualizarCliente,
  eliminarCliente,
  RestablecerPasswrodCliente
};
