const {Router} = require('express');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/products');


//Instance Router
const router = Router();

router.get('/product', getProducts);
router.post('/product', createProduct);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;