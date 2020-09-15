// Definición de las rutas de cada uno de los endpoints de los productos

module.exports = app => {
    const productController = require('../controllers/productController');
    // GET que obtiene todos los productos
    app.get('/api/products', productController.findAll);
    // GET que obtiene los productos de una categoría específica
    app.get('/api/products/:category', productController.findByCategory)
};