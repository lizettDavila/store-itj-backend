const productService = require('../services/product-service');
   
const getProducts = async (req, res, next) => {
        try {
            const products = await productService.getProducts();
                res.json(products);
            
        } catch(error) {
            next(error);
        }
}
const getProduct = async (req, res, next) => {
    const id = req.params.id;
    try{
        const product = await productService.getProduct(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        res.json(product);

    }catch(err){
        next(err);
    }
}

const createProduct = async (req, res, next) => {
    const newProduct = req.body;
    try {
        const saveProduct = await productService.createProduct(newProduct);
        res.json(saveProduct);
    }catch(err){
        next(err);
    }
}

const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const productToUpdate = req.body;

    try{
        const updateProduct = await productService.updateProduct(id, productToUpdate);
        if(!updateProduct){
            return res.status(404).json({message: 'Product does not exist'});
        }
        res.json(updateProduct);
    }catch(err){
        next(err);
    }
}

const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try{
       await productService.deleteProduct(id);
       return res.status(200).json({message: 'Product deleted correctly'});
    }catch(err){
        next(err);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}