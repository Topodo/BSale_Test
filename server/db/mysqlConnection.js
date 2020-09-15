/**
 * Archivo que contiene el handler para realizar la conexión desde el backend
 * con la base de datos MySQL
 */

const mysql = require('mysql');
const config = require('./config/db.config');

// Se establece la conexión a la base de datos
const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

connection.connect(error => {
    if (error) 
        throw error;
    else 
        console.log("MySQL connection established.")
})

module.exports = connection;