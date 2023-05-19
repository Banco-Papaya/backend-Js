const servicio = require("../servicios/cuenta.servicio");

const getById = async (req, res) => {
  res.send(await servicio.GetById(req.params.id));
}
const agregarCuenta = async (req, res) => {
  res.send(await servicio.agregarCuenta(req.body));
}
const actualizarCuenta = async (req, res) => {
  res.send(await servicio.actualizarCuentaByID(req.params.id,req.body));
}
const desabilitarCuenta = async (req, res) => {
  res.send(await servicio.actualizarCuentaByID(req.params.id,{state: false,
    fechaActualizacion: new Date()}));
}

module.exports = {
  getById,
  agregarCuenta,
  actualizarCuenta,
  desabilitarCuenta
};
