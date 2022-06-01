const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    code: {type: String, required: true},   
    image: {type: String, required: false}, 
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);
