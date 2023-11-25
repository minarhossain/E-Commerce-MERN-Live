const express = require('express');
const BrandController = require('../controllers/BrandController');
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const InvoiceController = require('../controllers/InvoiceController');
const ProfileController = require('../controllers/ProfileController');
const UserController = require('../controllers/UserController');

const router = express.Router();


// brand Category
router.get('/BrandList', BrandController.BrandList);
router.get('/CategoryList', CategoryController.CategoryList);


// Product


router.get('/ProductList', ProductController.ProductList);
router.get('/InvoiceList', InvoiceController.InvoiceList);



// product
router.get('/SliderList', ProductController.SliderList);
router.get('/ListByCategory', ProductController.ListByCategory);
router.get('/ListBySimilar', ProductController.ListBySimilar);
router.get('/ListByBrand', ProductController.ListByBrand);
router.get('/ListByKeyword', ProductController.ListByKeyword);
router.get('/ListReview', ProductController.ListReview);
router.get('/ProductDetails', ProductController.ProductDetails);
router.get('/ListByRemark', ProductController.ListByRemark);
router.get('/WishList', ProductController.WishList);
router.get('/CreateWishList', ProductController.CreateWishList);
router.get('/RemoveWishList', ProductController.RemoveWishList);
router.get('/CartList', ProductController.CartList);
router.get('/CreateCartList', ProductController.CreateCartList);
router.get('/RemoveCartList', ProductController.RemoveCartList);


// user related

router.get('/UserLogin', UserController.UserLogin);
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin);
router.get('/UserLogOut', UserController.UserLogOut);


// profile related router
router.get('/CreateProfile', ProfileController.CreateProfile);
router.get('/GetProfile', ProfileController.ReadProfile);
router.get('/UpdateProfile', ProfileController.UpdateProfile);


module.exports = router;
