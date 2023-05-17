const Departamento = require("../schemas/departamento.schema");


const GetAll = async () => {
  try {
    return await Departamento.find();
  } catch (e) {
    return null;
  }
};

const agregarDepartamento = async (datos) => {
  try {
    const departamento = new Departamento(datos);
    return await departamento.save();
  } catch (e) {
    return null;
  }
};


module.exports = {
  GetAll,
  agregarDepartamento
};
