const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productschema');


// define which routes to handle by their start path

//Create
router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

//Read All
router.get('/', 
    productController.readAllProducts
);

//Read By ID
router.get('/:id', 
    productController.readProductById
);

// Update
router.put('/:id',
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct
);

// Delete
router.delete('/:id', 
    productController.deleteProduct
);


module.exports = router;