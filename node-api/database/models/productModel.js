const mongoose = require('mongoose');

// create entity, toObject also applies a transform that replaces and removes _id and __v values respectively.
// time stamps very useful information to have
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    status: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});


module.exports = mongoose.model('Product', productSchema);