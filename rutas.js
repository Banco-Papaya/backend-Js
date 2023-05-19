const express = require("express");
const router = express.Router();

router.use("/sucursal", require("./rutas/sucursal.rutas"));
router.use("/deparmento", require("./rutas/departamento.rutas"));
router.use("/empleado", require("./rutas/empleado.rutas"));
router.use("/cliente", require("./rutas/cliente.rutas"));
router.use("/cuenta", require("./rutas/cuenta.rutas"));
module.exports = router;
