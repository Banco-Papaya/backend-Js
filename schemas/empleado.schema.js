const mongoose = require("mongoose");
const crypto = require("crypto");

const empleadoSchema = new mongoose.Schema({
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
  sucursales:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "sucursales"
  },
  state:{
    type: Boolean,
    default: true
  },
  rol:{
    type: String,
    enum: ['Accesor', 'Superior'],
    required: true,
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

module.exports = mongoose.model("empleado", empleadoSchema);
