const router = require("express").Router();

const { Auditoria } = require("../middleware/auditoria.milddleware");


const {
  actualizarCliente,
  agregarCliente,
  getAll,
  getById,
  eliminarCliente,
  RestablecerPasswrodCliente
} = require("../controladores/cliente.controller");

router.post(
  "/",
  agregarCliente
);

router.post(
  "/restarpassword/:id",
  RestablecerPasswrodCliente
);

router.get("/", getAll);

router.get("/:id", getById);

router.put(
  "/:id",
  [Auditoria],
  actualizarCliente
);

router.delete("/:id", [Auditoria], eliminarCliente);

module.exports = router;
