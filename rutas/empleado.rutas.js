const router = require("express").Router();

const { Auditoria } = require("../middleware/auditoria.milddleware");


const {
  actualizarEmpleado,
  agregarEmpleado,
  getAll,
  getById,
  eliminarEmpleado,
  RestablecerPasswrodEmpleado
} = require("../controladores/empleado.controller");

router.post(
  "/",
  agregarEmpleado
);

router.post(
  "/restarpassword/:id",
  RestablecerPasswrodEmpleado
);

router.get("/", getAll);

router.get("/:id", getById);

router.put(
  "/:id",
  [Auditoria],
  actualizarEmpleado
);

router.delete("/:id", [Auditoria], eliminarEmpleado);

module.exports = router;
