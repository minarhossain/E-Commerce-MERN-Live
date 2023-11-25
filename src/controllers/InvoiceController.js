
exports.InvoiceList = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Invoice is"
        })
    } catch (error) {
        next(error);
    }

}