const errorHandler = (error, req, res, next) => {

    console.error(error);

    if (error.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "An account with this email already exists",
        });
    }

    if (error.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }

    if (error.statusCode) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};

module.exports = {
    errorHandler,
};