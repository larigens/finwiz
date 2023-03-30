const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { emailRegex, usernameRegex, passwordRegex } = require('../utils/validators');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [emailRegex, 'Must match an email address!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        lowercase: true,
        trim: true,
        match: usernameRegex,
        minlength: [6, 'Username must be at least 6 characters long.'],
        maxlength: [40, 'Username must be no more than 40 characters long.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        match: [passwordRegex, 'Must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character!'],
        minlength: [8, 'Password must be at least 8 characters long.'],
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    employeeProperty: {
        carriers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Carrier'
            }
        ]
    }
}, {
    toJSON: { virtuals: true },
    id: false,
    timestamps: true,
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Virtual property to check if the role is employee to return the employeeProperty property.
userSchema.virtual('isEmployee').get(function () {
    if (this.role === 'Employee') {
        return this.employeeProperty;
    }
    return undefined; // Return undefined if the user is not an employee
});

// Defines pre-save middleware to hash the user's password before saving it to the database.
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Method to compare an incoming password with the hashed password.
userSchema.methods.validatePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;