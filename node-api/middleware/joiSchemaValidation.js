const Joi = require('@hapi/joi');
const constants = require('../constants');

const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema, {convert: false}); //false convert prevents joi from automatically converting data types to a matching required equivalent

    if(result.error)
    {
        //find error message logged by joi
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            };
        });
        return errorDetails
    }
    else
    {
        return null;
    }
}

// to be called in routes to validate info before it is sent to the service
// takes in a schema and applies it to the incoming request from the route
module.exports.validateBody = (schema) =>
{
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse};
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_RESUQEST;
            response.status = 400;
            return res.status(response.status).send(response);
        }
        return next();
    }
}