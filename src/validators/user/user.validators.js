const {body, validationResult} = require('express-validator');
const ApiError = require('../../utils/ApiError');

exports.userValidator = [
    body('name').isString().notEmpty().withMessage("Name must not be empty"),
    body('email').isEmail().withMessage("Invalid email format"),
    body('password').isLength({min: 8}).withMessage("Password must be at least 8 characters long"),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            const apiErrors = errors.array().map(err => new ApiError(400, err.msg));
            return res.status(400).json({errors: apiErrors});
        }
        next();
    }
];