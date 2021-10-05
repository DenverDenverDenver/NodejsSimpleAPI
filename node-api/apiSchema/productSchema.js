const Joi = require('@hapi/joi');

// construct validation rules for each route for this object of entity.
// https://joi.dev/api/?v=17.4.2

// validate the create product api payload
// create
module.exports.createProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    status: Joi.string().required()
});

// update
// required may not be needed if it's ok to update less than all fields at once.
module.exports.updateProductSchema = Joi.object().keys({
    name: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    status: Joi.string()
});