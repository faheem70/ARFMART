const express = require("express");
const { registerUser, loginUser, logout, forgetPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")
const router = express.Router();


router.route("https://arfmart.onrender.com/register").post(registerUser);

router.route("https://arfmart.onrender.com/login").post(loginUser);
router.route("https://arfmart.onrender.com/password/forgot").post(forgetPassword);
router.route("https://arfmart.onrender.com/password/reset/:token").put(resetPassword);
router.route("https://arfmart.onrender.com/logout").get(logout);
router.route("https://arfmart.onrender.com/me").get(isAuthenticatedUser, getUserDetails);

router.route("https://arfmart.onrender.com/password/update").put(isAuthenticatedUser, updatePassword);

router.route("https://arfmart.onrender.com/me/update").put(isAuthenticatedUser, updateProfile);

router.route("https://arfmart.onrender.com/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("https://arfmart.onrender.com/admin/users/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser).put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;