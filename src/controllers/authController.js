const { validateSignupData } = require('../utils/validations');

const {signupUser} = require("../services/authService");

const signup = async (req, res, next) => {
    try {
        //validate data
        validateSignupData(req);

        //Business logic
        const user = await signupUser(req.body);

        //Http response
        return res.status(201).json({
            success : true,
            message : 'User registed successfully',
            data : {
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            }
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    signup,
}