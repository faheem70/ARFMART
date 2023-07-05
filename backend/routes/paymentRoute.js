const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("https://arfmart.onrender.com/payment/process").post(isAuthenticatedUser, processPayment);

router.route("https://arfmart.onrender.com/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;