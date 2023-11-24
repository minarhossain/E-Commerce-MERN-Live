const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    shortDec: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    discount: {
        type: Boolean,
        trim: true,
        required: true,
    },
    discountPrice: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,

    },
    stock: {
        type: Boolean,
        trim: true,
        required: true,
        default: true
    },
    star: {
        type: String,
        trim: true,
        required: true
    },
    remark: {
        type: String,
        trim: true,
        required: true,
        enum: ["new", "trending", "popular", "top", "special", "regular"]
    },
    categoryId: {

    },
    brandId: {

    },
    createdAt: {

    },
    updatedAt: {

    }
}, { timestamps: true, versionKey: false });

const ProductModel = mongoose.model("categories", productSchema);

module.exports = ProductModel;