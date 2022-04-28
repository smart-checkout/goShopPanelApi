const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
    },
    rfid: {
        type: String,
        minlength: 4,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model("Product", productSchema, 'products')