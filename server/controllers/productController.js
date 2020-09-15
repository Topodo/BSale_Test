/**
 * Controlador del modelo Product, el cual se encarga de acceder a dicho modelo
 * y realizar las operaciones de la base de datos.
 */

const product = require('../models/product');

// Servicio REST que obtiene todos los productos
exports.findAll = (request, response) => {
    product.findAll((error, data) => {
        if (error)
            response.status(500).send({ message: error.message || "Ocurrió un error de conexión." });
        else
            response.send(data);
    });
}

// Servicio REST que obtiene un producto específico
exports.findById = (request, response) => {
    product.findById(request.params.id, (error, data) => {
        if (error)
            if (error.kind === "not_found")
                response.status(404).send({ message: error.message || "Producto no encontrado." })
            else
                response.status(500).send({ message: error.message || "Ocurrió un error de conexión." });
        else
            response.send(data);
    });
}

// Servicio REST que obtiene todos los productos de una categoría específica
exports.findByCategory = (request, response) => {
    product.findByCategory(request.params.category, (error, data) => {
        if (error) {
            if (error.kind === "not_found")
                response.status(404).send({ message: error.message || "Categoría no encontrada." })
            else
                response.status(500).send({ message: error.message || "Ocurrió un error de conexión." });
        } else {
            response.send(data)
        }
    })
}