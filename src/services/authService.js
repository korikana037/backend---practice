const bcrypt = require('bcrypt');
const { User } = require('../models/user');

const signupUser = async({
    firstName,
    lastName,
    email,
    password,
}) => {
    const existingUser = await User.findOne({email});
    if (existingUser) {
        const error = new Error (
            'an account with this email alredy exists'
        );
        error.statuscode = 409;
        throw error; 
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        firstName,
        lastName,
        email,
        password : passwordHash
    });
    await user.save();
    return user;

};

module.exports = {
    signupUser,
}