/**
 * Controlador del modelo Category, el cual se encarga de acceder a dicho modelo
 * y realizar las operaciones de la base de datos.
 */

const category = require('../models/category');

// Servicio REST que obtiene todas las categorías
exports.findAll = (request, response) => {
    category.findAll((error, data) => {
        if (error) 
            response.status(500).send({
                message: error.message || "Ocurrió un error de conexión."
            });
        else response.send(data);
    });
}