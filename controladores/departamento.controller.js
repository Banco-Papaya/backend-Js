const servicio = require("../servicios/departamento.servicio");

const getDepartamento = async (req, res) => {
  res.send(await servicio.GetAll());
}

const agregarDepartamento = async (req, res) => {
  res.send(await servicio.agregarDepartamento(req.body));
}
module.exports = {
  getDepartamento,
  agregarDepartamento
};
