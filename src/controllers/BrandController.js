

exports.BrandList = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "BrandLis is"
        })
    } catch (error) {
        next(error);
    }

}