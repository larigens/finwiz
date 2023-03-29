const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { emailRegex, usernameRegex, passwordRegex } = require('../utils/validators');

const employeeSchema = new Schema({
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
        maxlength: [20, 'Username must be no more than 20 characters long.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        match: [passwordRegex, 'Must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character!'],
        minlength: [8, 'Password must be at least 8 characters long.'],
        maxlength: [30, 'Password must be no more than 30 characters long.'],
    }
}, {
    toJSON: { virtuals: true },
    id: false,
    timestamps: true,
});

employeeSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Defines pre-save middleware to hash the employee's password before saving it to the database.
employeeSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Method to compare an incoming password with the hashed password.
employeeSchema.methods.validatePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Employee = model('Employee', employeeSchema);

module.exports = Employee;