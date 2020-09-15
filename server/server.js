/**
 * server.js
 * Archivo encargado de realizar la conexión principal a la base de datos y exponer
 * los distintos servicios web desde el servidor hacia el cliente.
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// La aplicación server-side responde con el formato application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Se activa el control de acceso CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// GET de verificación de conexión al servidor
app.get("/status", (request, response) => {
    response.json({
        message: "Connection established."
    })
})

// Se conectan los routers de Productos y Categorías
productRoutes(app);
categoryRoutes(app);

// Se establece la conexión del servidor
app.listen(process.env.PORT || 8080, () => console.log("Server running."))