require('dotenv').config()
const conexion=require("./utilidades/conexion")
const app = require('./app.js')
const port = process.env.PORT || 3000
app.listen(port, () => {
  conexion()
})