const express = require('express');
const router = express.Router();
const ProductOUCRController = require('../controller/ProductOUCRController');

router.get('/', ProductOUCRController.getAllProduct);
router.get('/:id', ProductOUCRController.getProductById);
router.post('/', ProductOUCRController.createProduct);
router.put('/:id', ProductOUCRController.updateProduct);
router.delete('/:id', ProductOUCRController.deleteProduct);

module.exports = router;
