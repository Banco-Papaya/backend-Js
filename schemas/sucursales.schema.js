const mongoose = require("mongoose");
const crypto = require("crypto");

const sucursalesSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },departamento: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "departamento"
  },
  state:{
    type: Boolean,
    default: true
  },
  ...require("./helpers/auditoria"),
});

module.exports = mongoose.model("sucursales", sucursalesSchema);
