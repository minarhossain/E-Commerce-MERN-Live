exports.SliderList = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "SliderList is"
        })
    } catch (error) {
        next(error);
    }

}


exports.ListByCategory = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ListByCategory is"
        })
    } catch (error) {
        next(error);
    }

}


exports.ListByBrand = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ListByBrand is"
        })
    } catch (error) {
        next(error);
    }

}


exports.ListBySimilar = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ListBySimilar is"
        })
    } catch (error) {
        next(error);
    }

}




exports.ListByKeyword = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ListByKeyword is"
        })
    } catch (error) {
        next(error);
    }

}

exports.ListReview = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ListReview is"
        })
    } catch (error) {
        next(error);
    }

}

exports.ProductDetails = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "ProductDetails is"
        })
    } catch (error) {
        next(error);
    }

}

exports.ListByRemark = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "ListByRemark List"
        })

    } catch (error) {
        next(error);
    }
}



exports.WishList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "Wish List"
        })
    } catch (error) {
        next(error);
    }
}



exports.CreateWishList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "CreateWish List"
        })
    } catch (error) {
        next(error);
    }
}


exports.RemoveWishList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "RemoveWish List"
        })
    } catch (error) {
        next(error);
    }
}



exports.CartList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "Cart List"
        })
    } catch (error) {
        next(error);
    }
}



exports.CreateCartList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "CreateCart List"
        })
    } catch (error) {
        next(error);
    }
}



exports.RemoveCartList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "RemoveCart List"
        })
    } catch (error) {
        next(error);
    }
}

exports.ProductList = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            data: "ProductList is"
        })
    } catch (error) {
        next(error);
    }
}

