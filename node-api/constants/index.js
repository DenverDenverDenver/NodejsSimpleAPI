// module to store information that can easily be accessed/changed as needed
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

module.exports = {
    defaultServerResponse: {
        status: 500,
        message: '',
        body:{}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product created successfully.',
        PRODUCTS_READ: 'Products read successfully.',
        PRODUCT_READ: 'Product read successfully.',
        PRODUCT_NOT_FOUND: 'Product not found.',
        PRODUCT_UPDATED: 'Product updated successfully.',
        PRODUCT_DELETED: 'Product deleted successfully.'
    },
    requestValidationMessage:{
        BAD_RESUQEST: 'Invalid input fields'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid ID'
    }
}