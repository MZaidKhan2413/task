const {body, validationResult} = require('express-validator');
const ApiError = require('../../utils/ApiError');

exports.loginValidator = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isEmpty().withMessage('Password is required!').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const apiErrors = errors.array().map(err => new ApiError(400, err.msg));
            return res.status(400).json({errors: apiErrors});
        }
        next();
    }
];