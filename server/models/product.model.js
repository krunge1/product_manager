const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be 2 characters or longer"]
    },
    price: {
        type: Number,
        required: [true, "Number is required"],
        min: [0.01, "Price Must be greater than $0.00"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Title must be 2 characters or longer"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
