const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    name: String,
    price: String,
    discription : String,
    ratings : String,
    images : [
        {
            image : String
        }
    ],
    category : String,
    seller : String,
    numOfReviews : String,
    craetedAt : Date
});

const productModel = mongoose.model('Product',productShema);

module.exports = productModel;