const Purchase = require('../models/purchase');

const createPurchase = async (purchase) => {
    const newPurchase = new Purchase(purchase);
    await newPurchase.save();
    return newPurchase;
}

module.exports = {createPurchase}