const Cuenta = require("../schemas/cuenta.schema");

const GetById = async (id) => {
  try {
    return await Cuenta.findById(id).populate("cliente").populate("sucursalDeCreacion");
  } catch (e) {
    return null;
  }
};

const agregarCuenta = async (datos) => {
  try {
    const cuenta = new Cuenta(datos);
    return await cuenta.save();
  } catch (e) {
    return null;
  }
};


const actualizarCuentaByID = async (_id, data) => {
  try {
    return await Cuenta.findByIdAndUpdate(_id, data);
  } catch (error) {
    return error;
  }
};


module.exports = {
  agregarCuenta,
  actualizarCuentaByID,
  GetById
};
