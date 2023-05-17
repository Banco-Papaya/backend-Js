const router = require("express").Router();

const {
  getDepartamento,
  agregarDepartamento
} = require("../controladores/departamento.controller");


router.get("/", getDepartamento);
router.post(
  "/",
  agregarDepartamento
);


module.exports = router;
