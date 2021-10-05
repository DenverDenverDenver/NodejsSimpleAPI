const productService = require('../service/productService');
const constants = require('../constants');

// controller module format:
// obtain default response framework as defined in constants
// send incoming request to appropriate service to receive a response
// construct final response using the response from the service, or construct an error response if needed
// return final response to http page that called the route

// create
module.exports.createProduct = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;
    }catch(ex){
        console.log('Exception at: createProduct Controller, ex: ', ex);
        response.status = 400;
        response.message = ex.message;
    }
    return res.status(response.status).send(response);
}

 // read all
module.exports.readAllProducts = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.readAllProducts();
        response.status = 200;
        response.message = constants.productMessage.PRODUCTS_READ;
        response.body = responseFromService;
    }catch(ex){
        console.log('Exception at: readAllProducts Controller, ex: ', ex);
        response.status = 400;
        response.message = ex.message;
    }
    return res.status(response.status).send(response);
}

// read by id
module.exports.readProductById = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.readProductById(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_READ;
        response.body = responseFromService;
    }catch(ex){
        console.log('Exception at: readProductById Controller, ex: ', ex);
        response.status = 400;
        response.message = ex.message;
    }
    return res.status(response.status).send(response);
}

// update
module.exports.updateProduct = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.updateProduct({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = responseFromService;
    }catch(ex){
        console.log('Exception at: updateProduct Controller, ex: ', ex);
        response.status = 400;
        response.message = ex.message;
    }
    return res.status(response.status).send(response);
}

// delete
module.exports.deleteProduct = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = responseFromService;
    }catch(ex){
        console.log('Exception at: deleteProduct Controller, ex: ', ex);
        response.status = 400;
        response.message = ex.message;
    }
    return res.status(response.status).send(response);
}