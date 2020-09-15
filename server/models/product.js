/**
 * Modelo que representa la tabla "product" 
 */ 
const mysql = require('../db/mysqlConnection');

// Constructor
const Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.url_image = product.url_image;
    this.price = product.price;
    this.discount = product.discount;
    this.category = product.category;
}

// Operaciones de la base de datos

// GET que obtiene todas los productos
Product.findAll = result => {
    mysql.query("SELECT * FROM product", (error, products) => {
        // Control de errores
        if (error) {
            console.error(error);
            result(null, error);
        } else {
            result(null, products);
        }
    })
}

// GET que obtiene los productos específicos de una categoría
Product.findByCategory = (category, result) => {
    mysql.query(`SELECT * FROM product WHERE category = ${category}`, (error, products) => {
        // Control de errores
        if (error) {
            console.error(error);
            result(null, error);
        } else {
            console.log(products);
            result(null, products);
        }
    })
}

module.exports = Product;