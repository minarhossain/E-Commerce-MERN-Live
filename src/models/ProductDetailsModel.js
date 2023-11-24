const mongoose = require('mongoose');

const ProductDetailsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    des: {
        type: String,
        trim: true,
        required: true
    },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
}
)

const ProductDetailsModel = mongoose.model('productDetails', ProductDetailsSchema);
module.exports = ProductDetailsModel;