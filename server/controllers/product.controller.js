const Product = require('../models/product.model');

module.exports = {
    //CRUD Items
    //create
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct)
        })
        .catch((err) =>{
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    },

    //Read (Find All)
    findAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    },

    //Read (Find One)
    findProductById: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) =>{
            res.json(oneProduct)
        })
        .catch((err) =>{
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    },
    //Update
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updateProduct) => {
            res.json(updateProduct)
        })
        .catch((err) =>{
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    },

    //Delete
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((deleteProduct) => {
            res.json(deleteProduct)
        })
        .catch((err) =>{
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    }
}