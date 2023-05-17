const Sucursal = require("../schemas/sucursales.schema");


const GetAll = async () => {
  try {
    return await Sucursal.find().populate("departamento");
  } catch (e) {
    return null;
  }
};

const GetById = async (id) => {
  try {
    return await Sucursal.findById(id).populate("departamento");
  } catch (e) {
    return null;
  }
};

const agregarSucursal = async (datos) => {
  try {
    const sucursal = new Sucursal(datos);
    return await sucursal.save();
  } catch (e) {
    return null;
  }
};

const actualizarSucursalByID = async (_id, data) => {
  try {
    return await Sucursal.findByIdAndUpdate(_id, data);
  } catch (error) {
    return error;
  }
};


module.exports = {
  agregarSucursal,
  actualizarSucursalByID,
  GetAll,
  GetById
};
