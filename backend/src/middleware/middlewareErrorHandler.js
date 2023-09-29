const dataResponse = require("../utils/dataResponse");

function middlewareErrorHandler(err, req, res, next) {
  console.error(err);
  res
    .status(err.status || 500)
    .json(dataResponse(false, err.message || "Internal Server Error", err));
}

module.exports = middlewareErrorHandler;
