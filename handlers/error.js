function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Hmm...  Something went wrong.  Please try again."
        }
    });
};
  
  module.exports = errorHandler;