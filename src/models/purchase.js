const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        products: {
            type: Array,
            required: false
        },
    
    },
    {timestamps: true}
);

const PurchaseModel = mongoose.model('Purchase', PurchaseSchema);
module.exports = PurchaseModel;  