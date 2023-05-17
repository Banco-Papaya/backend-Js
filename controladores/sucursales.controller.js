const servicio = require("../servicios/sucursales.servicio");


const { Auditoria } = require("../middleware/auditoria.milddleware");

const getAll = async (req, res) => {
  res.send(await servicio.GetAll());
}
const getById = async (req, res) => {
  res.send(await servicio.GetById(req.params.id));
}
const agregarSucursal = async (req, res) => {
  res.send(await servicio.agregarSucursal(req.body));
}
const actualizarSucursal = async (req, res) => {
  res.send(await servicio.actualizarSucursalByID(req.params.id,req.body));
}
const eliminarSucursal = async (req, res) => {
  res.send(await servicio.actualizarSucursalByID(req.params.id,{state: false,
    fechaActualizacion: new Date()}));
}
module.exports = {
  getAll,
  getById,
  agregarSucursal,
  actualizarSucursal,
  eliminarSucursal
};
