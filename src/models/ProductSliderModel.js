const mongoose = require('mongoose');

const ProductSliderSchema = mongoose.Schema({
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
    price: {
        type: String,
        required: true
    },
    image: { type: String },
    productId: {
        type: mongoose.Schema.Types.ObjectId
    },
}, {
    timestamps: true,
    versionKey: false
}
)

const ProductSliderModel = mongoose.model('productSliders', ProductSliderSchema);
module.exports = ProductSliderModel;