/**
 * Archivo que contiene el handler para realizar la conexión desde el backend
 * con la base de datos MySQL
 */

const mysql = require('mysql');
const config = require('./config/db.config');

// Se establece la conexión a la base de datos
var connection = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

connection.getConnection(error => {
    if (error) {
        console.log("\n\t *** Cannot establish a connection with the database. ***");
        connection = reconnect(connection);
    } else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});

// Función encargada de reconectar con la base de datos
function reconnect(connection) {

    connection = mysql.createPool(db_config);

    connection.getConnection(error => {
        if (error) {
            setTimeout(reconnect(connection), 1000);
        } else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}

// Manejador de errores de conexión
connection.on('error', error => {

    if (error.code === "PROTOCOL_CONNECTION_LOST") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + error.code + ")");
        return reconnect(connection);
    }

    else if (error.code === "PROTOCOL_ENQUEUE_AFTER_QUIT") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + error.code + ")");
        return reconnect(connection);
    }

    else if (error.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + error.code + ")");
        return reconnect(connection);
    }

    else if (error.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + error.code + ")");
    }

    else {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + error.code + ")");
        return reconnect(connection);
    }

});

module.exports = connection;