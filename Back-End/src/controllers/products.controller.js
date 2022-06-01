const productControllers = {};
const Product = require('../models/product');

productControllers.getProducts = async (req, res) => {
    let productSearch = new RegExp(`.*${req.query.searchBy || ''}.*`, 'i');
    const products = await Product.find(
        {
            "$or":[
                {name: {$regex: productSearch}}, 
                {code: {$regex: productSearch}},
                {category: {$regex: productSearch}}
            ]
        }
    );
    res.json(products);
}

productControllers.createProducts = async (req, res) => {
    const newProduct = new Product(req.body);    
    await newProduct.save();    
    res.send({message: 'Product Created'});
}
productControllers.readProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
}
productControllers.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Product Updated'});
}
productControllers.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({status: 'Product Deleted'});
}
productControllers.uploadImage = async (req, res) => {
    
    res.json({message: 'File uploaded successfully'});
}

module.exports = productControllers;