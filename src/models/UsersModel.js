const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
}
)

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
