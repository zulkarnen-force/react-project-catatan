const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dataResponse = require("../utils/dataResponse");
const ErrorResponse = require("../errors/errorResponse");
const JWT_SECRET = "Pyaardimenukichahida";

async function SignInService(req) {
  let success = false;
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    throw new ErrorResponse(400, "Email tidak terdaftar!");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new ErrorResponse(400, "Password anda salah!");
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = jwt.sign(data, JWT_SECRET);
  success = true;
  return dataResponse(success, "Berhasil Login", authToken);
}

async function SignUpService(req) {
  let success = false;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    throw new ErrorResponse(400, "Email sudah terdaftar!");
  }
  const salt = await bcrypt.genSalt(10);
  const passwordEncrypted = await bcrypt.hash(req.body.password, salt);
  user = await User.create({
    name: req.body.name,
    password: passwordEncrypted,
    email: req.body.email,
  });
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = jwt.sign(data, JWT_SECRET);
  success = true;
  return dataResponse(success, "Selamat, berhasil terdaftar.", authToken);
}

module.exports = {
  SignInService,
  SignUpService,
};
