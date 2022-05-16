const {Router} = require('express');
const {createPurchase} = require('../controller/purchase');

const router = Router();

router.post('/purchase', createPurchase);

module.exports = router;