
exports.CreateProfile = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Profile Created Successfully"
        })
    } catch (error) {
        next(error);
    }

}
exports.ReadProfile = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Profile Get"
        })
    } catch (error) {
        next(error);
    }

}
exports.UpdateProfile = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Profile Updated Successfully"
        })
    } catch (error) {
        next(error);
    }

}