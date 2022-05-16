const Product = require('../models/product');


const createProduct = async (product) => {
    const newProduct = new Product(product);
    await newProduct.save();
    return newProduct;
}

const getProducts = async () => {
    const products = await Product.find().lean().exec();
    return products;
}
const getProduct = async (id) => {
    const product = await Product.findById(id).lean().exec();
    return product;
}

const updateProduct = async (id, product) => {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
        returnDocument: 'after'
    }).lean().exec();

    return updateProduct;
}

const deleteProduct = async (id) => {
    await Product.findByIdAndDelete(id);
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}