const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cus_name: {
        type: String,
        trim: true,
        required: true
    },
    cus_add: {
        type: String,
        trim: true,
        required: true
    },
    cus_city: {
        type: String,
        trim: true,
        required: true
    },
    cus_state: {
        type: String,
        trim: true,
        required: true,
        default: 'Khulna'
    },
    cus_postCode: {
        type: String,
        trim: true,
        required: true,
        default: '9311'
    },
    cus_country: {
        type: String,
        trim: true,
        required: true,
        default: 'Bangladesh'
    },
    cus_phone: {
        type: String,
        trim: true,
        required: true
    },
    cus_fax: {
        type: String,
        trim: true,
        required: true,
        default: '0000'
    },





    ship_name: {
        type: String,
        trim: true,
        required: true
    },
    ship_add: {
        type: String,
        trim: true,
        required: true
    },
    ship_city: {
        type: String,
        trim: true,
        required: true
    },
    ship_state: {
        type: String,
        trim: true,
        required: true,
        default: 'Khulna'
    },
    ship_postCode: {
        type: String,
        trim: true,
        required: true,
        default: '9311'
    },
    ship_country: {
        type: String,
        trim: true,
        required: true,
        default: 'Bangladesh'
    },
    ship_phone: {
        type: String,
        trim: true,
        required: true
    },
    ship_fax: {
        type: String,
        trim: true,
        required: true,
        default: '0000'
    },
}, {
    timestamps: true,
    versionKey: false
}
)

const ProfileModel = mongoose.model('profiles', DataSchema);
module.exports = ProfileModel;