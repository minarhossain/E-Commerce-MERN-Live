exports.CategoryList = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "CategoryList is"
        })
    } catch (error) {
        next(error);
    }

}