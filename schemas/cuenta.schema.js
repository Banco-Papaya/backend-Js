const mongoose = require("mongoose");
const crypto = require("crypto");

const cuentaSchema = new mongoose.Schema({
  numeroCuenta: {
    type: Number,
    required: true,
  },
  sucursalDeCreacion:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "sucursales"
  },
  cliente:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "cliente"
  },
  state:{
    type: Boolean,
    default: true
  },
  dineroActual:{
    type: String,
    default: '0'
  },
    ...require("./helpers/auditoria"),
});

module.exports = mongoose.model("cuenta", cuentaSchema);
