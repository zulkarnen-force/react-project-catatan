function dataResponse(success, message, data) {
  return {
    success: success,
    message: message,
    data: data,
  };
}

module.exports = dataResponse;
