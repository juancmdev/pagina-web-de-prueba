const express = require("express");
const cors = require("cors");
const productos = require("./database/productosDb");

const app = express();
const port = 3001;

// Activamos el middleware de cors
app.use(cors());

//rutas de la API
app.get("/apiProductos", (req, res) => {
  res.json(productos);
});

app.get("/apiProductos/:id", (req, res) => {
  const producto = productos.find(
    (producto) => producto.id === parseInt(req.params.id)
  );
  res.json(producto);
});

//Escuchar el servidor
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 3001");
});
