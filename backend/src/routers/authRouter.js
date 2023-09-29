const express = require("express");
const router = express.Router();
const {
  SignUpController,
  SignInController,
} = require("../controllers/authController");
const {
  signUpValidation,
  signInValidation,
} = require("../validations/authValidation");
const middlewareValidation = require("../middleware/middlewareValidation");

router.post(
  "/createuser",
  signUpValidation,
  middlewareValidation,
  SignUpController
);

router.post("/login", signInValidation, middlewareValidation, SignInController);

module.exports = router;
