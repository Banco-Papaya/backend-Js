const Empleado = require("../schemas/empleado.schema");


const GetAll = async () => {
  try {
    return await Empleado.find().populate("departamento").populate("sucursales");
  } catch (e) {
    return null;
  }
};

const GetById = async (id) => {
  try {
    return await Empleado.findById(id).populate("departamento").populate("sucursales");
  } catch (e) {
    return null;
  }
};

const agregarEmpleado = async (datos) => {
  try {
    const empleado = new Empleado(datos);
    return await empleado.save();
  } catch (e) {
    return null;
  }
};

const actualizarEmpleadoByID = async (_id, data) => {
  try {
    return await Empleado.findByIdAndUpdate(_id, data);
  } catch (error) {
    return error;
  }
};


module.exports = {
  agregarEmpleado,
  actualizarEmpleadoByID,
  GetAll,
  GetById
};
