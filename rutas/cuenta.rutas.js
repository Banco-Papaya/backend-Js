const router = require("express").Router();

const { Auditoria } = require("../middleware/auditoria.milddleware");


const {
  actualizarCuenta,
  agregarCuenta,
  getById,
  desabilitarCuenta
} = require("../controladores/cuenta.controller");

router.post(
  "/",
  agregarCuenta
);

router.get("/:id", getById);

router.put(
  "/:id",
  [Auditoria],
  actualizarCuenta
);

router.delete("/:id", [Auditoria], desabilitarCuenta);

module.exports = router;
