const validator = require("validator");

const validateSignupData = (req) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !firstName.trim()) {
        throw new Error("First name is required");
    }

    if (!lastName || !lastName.trim()) {
        throw new Error("Last name is required");
    }

    if (!email) {
        throw new Error("Email is required");
    }

    if (!password) {
        throw new Error("Password is required");
    }

    if (!validator.isEmail(email)) {
        throw new Error("Please enter a valid email address");
    }

    if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        throw new Error(
            "Password must be at least 8 characters and contain uppercase, lowercase, number, and symbol"
        );
    }
};

module.exports = {
    validateSignupData,
};