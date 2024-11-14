const ApiError = require('../utils/apiError');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    } else {
        res.status(500).json({
            success: false,
            message: err?.message || "Error Handler: Some internal server error",
        });
    }
};

module.exports = errorHandler