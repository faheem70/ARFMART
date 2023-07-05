const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReview, deleteReview, getAdminProducts } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("https://arfmart.onrender.com/products").get(getAllProducts);

router
  .route("https://arfmart.onrender.com/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("https://arfmart.onrender.com/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("https://arfmart.onrender.com/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);


router.route("https://arfmart.onrender.com/product/:id").get(getProductDetails);

router.route("https://arfmart.onrender.com/review").put(isAuthenticatedUser, createProductReview);

router.route("https://arfmart.onrender.com/reviews").get(getProductReview).delete(isAuthenticatedUser, deleteReview);


module.exports = router;