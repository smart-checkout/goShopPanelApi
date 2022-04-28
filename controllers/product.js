const Product = require("../models/Product")
var ObjectID = require('mongodb').ObjectID;


exports.list = (req, res) => {
    Product.find((err, products) => {
        if (err) {
            return res.status(400).json({
                code: 400,
                error: "an error occured"
            })
        }
        if (products.length === 0) {
            return res.json({
                code: 204,
                message: "empty"
            })
        }
        return res.json({
            products
        })

    })
}
exports.listById = (req, res) => {
    Product.findOne({ rfid: req.body.id }, (err, product) => {
        if (err) {
            return res.status(400).json({
                code: 400,
                error: "an error occured"
            })
        }
        if (!product) {
            return res.json({
                code: 204,
                message: "product not found"
            })
        }
        return res.json({
            product
        })

    })
}
exports.addProduct = (req, res) => {
    const product = new Product(req.body)
    product.save((err, product) => {
        if (err) {
            return res.status(400).json({
                error: "Unable to add user"
            })
        }

        return res.json({
            message: "Success",
            product
        })
    })
}
exports.updateProductByID = (req, res) => {
    var condition = { _id: new ObjectID(JSON.parse(req.query.id)) };
    var updateData = { $set: req.body };
    Product.updateOne(condition, updateData, function (err, product) {
        if (err) throw err;
        return res.json({
            message: "Success",
            product
        })
    });
}
exports.deleteProductByID = (req, res) => {
    var condition = { _id: new ObjectID(JSON.parse(req.query.id)) };
    Product.remove(condition, function (err, product) {
        if (err) throw err;
        return res.json({
            message: "Success",
            product
        })
    });
}