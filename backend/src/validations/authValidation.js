const { body } = require("express-validator");

const signUpValidation = [
  body("name", "Masukan nama dengan valid").isLength({ min: 3 }),
  body("email", "Masukan email dengan valid").isEmail(),
  body("password", "Masukan password dengan valid").isLength({ min: 5 }),
];

const signInValidation = [
  body("email", "Masukan nama dengan valid").isEmail(),
  body("password", "Password tidak boleh kosong").exists(),
];

module.exports = { signInValidation, signUpValidation };
