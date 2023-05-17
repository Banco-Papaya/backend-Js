const mongoose = require("mongoose");
const crypto = require("crypto");

const clienteSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  departamento: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "departamento"
  },
  clave: {
    type: String,
    required: true,
  },
  sucursalDeCreacion:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "sucursales"
  },
  empleado:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "empleado"
  },
  state:{
    type: Boolean,
    default: true
  },
  tipoDocumento:{
    type: String,
    enum: ['CC', 'TI', 'PASAPORTE'],
    required: true,
  },
  numeroDocumento: {
    type: String,
    required: true,
  },
  ...require("./helpers/auditoria"),
});

module.exports = mongoose.model("cliente", clienteSchema);
