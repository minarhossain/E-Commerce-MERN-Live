
exports.UserLogin = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "User Login Successfully"
        })
    } catch (error) {
        next(error);
    }

}
exports.VerifyLogin = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "User Verified Successfully"
        })
    } catch (error) {
        next(error);
    }

}

exports.UserLogOut = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "User Logout Successfully"
        })
    } catch (error) {
        next(error);
    }

}