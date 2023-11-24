const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        trim: true
    },
    brandImg: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true, versionKey: false })

const BrandModel = mongoose.model('brands', BrandSchema);

module.exports = BrandModel;