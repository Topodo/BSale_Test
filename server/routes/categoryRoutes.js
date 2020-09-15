// Definición de las rutas de cada uno de los endpoints de las categorías

module.exports = app => {
    const categoryController = require('../controllers/categoryController');
    // GET que obtiene todas las categorías
    app.get('/api/categories', categoryController.findAll);
};