var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', productController.viewProducts);
router.get('/products/profile/:id', productController.renderProfile);
router.get('/products/edit/:id', productController.renderEditForm);
router.get('/products/add', productController.renderAddForm);
router.get('/products/delete/:id', productController.deleteProduct);
router.post('/products/edit/:id', productController.updateProduct);
router.post('/products/add', productController.addProduct);
module.exports = router;
