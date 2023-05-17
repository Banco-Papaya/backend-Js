const router = require("express").Router();

const { Auditoria } = require("../middleware/auditoria.milddleware");


const {
  actualizarSucursal,
  agregarSucursal,
  getAll,
  getById,
  eliminarSucursal
} = require("../controladores/sucursales.controller");

// const {
//   valRegistrarContador,
//   valActualizarContador,
// } = require("../validaciones/contador.validaciones");

router.post(
  "/",
  agregarSucursal
);

router.get("/", getAll);

router.get("/:id", getById);

router.put(
  "/:id",
  [Auditoria],
  actualizarSucursal
);

router.delete("/:id", [Auditoria], eliminarSucursal);

module.exports = router;
