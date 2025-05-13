const { check, validationResult } = require("express-validator");

const validateSchoolInputs = [
    check("name")
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Name must be between 2 to 100 characters.")
        .matches(/^[A-Za-z0-9\s\-'.,]+$/)
        .withMessage("Name contains invalid characters."),

    check("address")
        .trim()
        .isLength({ min: 5, max: 150 })
        .withMessage("Address must be between 5 to 150 characters.")
        .matches(/^[A-Za-z0-9\s.,#'/-]+$/)
        .withMessage("Address contains invalid characters."),

    check("latitude")
        .isFloat({ min: -90, max: 90 })
        .withMessage("Latitude must be a number between -90 and 90."),

    check("longitude")
        .isFloat({ min: -180, max: 180 })
        .withMessage("Longitude must be a number between -180 and 180."),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateSchoolInputs;