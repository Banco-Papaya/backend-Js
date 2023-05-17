const Cliente = require("../schemas/cliente.schema");


const GetAll = async () => {
  try {
    return await Cliente.find().populate("departamento").populate("sucursalDeCreacion").populate("empleado");
  } catch (e) {
    return null;
  }
};

const GetById = async (id) => {
  try {
    return await Cliente.findById(id).populate("departamento").populate("sucursalDeCreacion").populate("empleado");
  } catch (e) {
    return null;
  }
};

const agregarCliente = async (datos) => {
  try {
    const cliente = new Cliente(datos);
    return await cliente.save();
  } catch (e) {
    return null;
  }
};

const actualizarClienteByID = async (_id, data) => {
  try {
    return await Cliente.findByIdAndUpdate(_id, data);
  } catch (error) {
    return error;
  }
};


module.exports = {
  agregarCliente,
  actualizarClienteByID,
  GetAll,
  GetById
};
