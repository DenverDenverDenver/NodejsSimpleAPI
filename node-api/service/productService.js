const Product = require('../database/models/productModel');
const {formatMongoData, validateObjectId} = require('../helper/dbHelper');
const constants = require('../constants');
const mongoose = require('mongoose');

// module structure
// use instantiation of entity to interact with the database in the required way to get the required result
// return the required result

// create 
module.exports.createProduct = async (serviceData) => {
    try{
        let product = new Product({...serviceData});
        let result = await product.save();
        return result.toObject();
    }catch(ex){
        console.log('Unhandled exception at: createProductService, ex: ', ex);
        throw new Error(ex);
    }
}

// read all
module.exports.readAllProducts = async (serviceData) => {
    try{
        let products = await Product.find({});
        return formatMongoData(products);
    }catch(ex){
        console.log('Unhandled exception at: readAllProductsService, ex: ', ex);
        throw new Error(ex);
    }
}

// read by id
module.exports.readProductById = async ({ id }) => {
    try{
        if (!validateObjectId(id))
        {
            throw new Error(constants.databaseMessage.INVALID_ID, id);
        }
        else
        {
            let product = await Product.findById(id);
            if(!product)
            {
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
            }
            return formatMongoData(product);
        } 
    }catch(ex){
        console.log('Unhandled exception at: readProductByIdService, id: ', id, 'ex: ', ex);
        throw new Error(ex);
    }
}

// update
module.exports.updateProduct = async ({id, updateInfo}) => {
    try{
        if (!validateObjectId(id))
        {
            throw new Error(constants.databaseMessage.INVALID_ID);
        }
        else
        {
            let product = await Product.findOneAndUpdate(
                {_id: id},
                updateInfo,
                {new: true}
            );
            if(!product)
            {
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
            }
            return formatMongoData(product);
        } 
    }catch(ex){
        console.log('Unhandled exception at: updateProductService, ex: ', ex);
        throw new Error(ex);
    }
}

// delete
module.exports.deleteProduct = async ({ id }) => {
    try{
        if (!validateObjectId(id))
        {
            throw new Error(constants.databaseMessage.INVALID_ID);
        }
        else
        {
            let product = await Product.findByIdAndDelete(id);
            if(!product)
            {
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
            }
            return formatMongoData(product);
        } 
    }catch(ex){
        console.log('Unhandled exception at: deleteProductService, ex: ', ex);
        throw new Error(ex);
    }
}