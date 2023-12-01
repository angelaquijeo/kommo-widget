const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const data = require("./data.json");
const app = express();
const port = process.env.PORT || 3000;

// Definir la ruta de la API
app.get("/api/disponibilidad/:fecha", (req, res) => {
  const { fecha } = req.params;
  if (data.fecha == fecha) {
    res.status(200).json({ data: data.personal_disponible });
  } else {
    res
      .status(404)
      .json({ data: "No hay disponbilidad en la fecha seleccionada" });
  }
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`API de disponibilidad escuchando en el puerto ${port}`);
});
