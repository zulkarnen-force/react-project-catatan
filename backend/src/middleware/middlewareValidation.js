const { validationResult } = require("express-validator");
const dataResponse = require("../utils/dataResponse");

function middlewareValidation(req, res, next) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(dataResponse(false, "error validation", errors));
  }
  return next();
}

module.exports = middlewareValidation;
