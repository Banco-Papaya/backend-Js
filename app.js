const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "pug");
app.use(express.json({ limit: "20mb" }));
app.use(compression());
app.get("/", (req, res) => {
  res.send("Hola bebe, que mas pues");
});

app.use("/v1/api", require("./rutas"));

module.exports = app;
