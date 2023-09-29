const { SignInService, SignUpService } = require("../services/authService");

async function SignInController(req, res, next) {
  try {
    const response = await SignInService(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

async function SignUpController(req, res, next) {
  try {
    const response = await SignUpService(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = { SignInController, SignUpController };
