const constants = require('../constants');
const mongoose = require('mongoose');

// if the return type is an array, this helper method will apply toObject to each, so that they can be transformed to remove __V and _ID
module.exports.formatMongoData = (data) => {
    if(Array.isArray(data))
    {
        let newDataList = [];
        for (value of data)
        {
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    else
    {
        return data.toObject();
    }
}

// validates incoming IDs, returning true if valid
module.exports.validateObjectId = (id) =>
{
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        console.log('Invalid ID: ', id);
        return false;
    }
    else
    {
        return true;
    }
}