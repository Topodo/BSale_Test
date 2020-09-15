/**
 * Modelo que representa la tabla "category" 
 */ 
const mysql = require('../db/mysqlConnection');

// Constructor
const Category = function(category) {
    this.id = category.id;
    this.name = category.name
}

// Operaciones de la base de datos

// GET que obtiene todas las categorías
Category.findAll = result => {
    mysql.query("SELECT * FROM category", (error, categories) => {
        // Control de errores
        if (error) {
            console.error(error);
            result(null, error);
        } else {
            result(null, categories);
        }
    })
}

module.exports = Category;