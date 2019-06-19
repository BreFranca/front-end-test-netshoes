const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/', controller.get);
router.get('/:sku', controller.getBySku);

module.exports = router;