/**
 * Archivo que contiene el handler para realizar la conexión desde el backend
 * con la base de datos MySQL
 */

const mysql = require('mysql');
const config = require('./config/db.config');

// Se establece la conexión a la base de datos
var connection = null;

const handleConnection = () => {
    // Se verifica que no exista una conexión a MySQL ejecutándose
    if (connection) connection.releaseConnection();

    connection = mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB
    });

    // Se manejan los errores de desconexión desde el servidor MySQL
    connection.on('error', error => {
        console.error('DB error', error.code);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else if (error.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
            handleConnection();
        }
    })
}

handleConnection();
module.exports = connection;