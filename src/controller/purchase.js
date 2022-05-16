const purchaseService = require('../services/purchase-service');

const createPurchase = async (req, res, next) => {
    const newPurchase = req.body;
    try{
        const savePurchase = await purchaseService.createPurchase(newPurchase);
        res.json(savePurchase);
    }catch(error){
        next(error);
    }

}

module.exports = {createPurchase}