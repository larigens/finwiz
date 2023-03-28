const { Schema, model } = require('mongoose');
const { emailRegex, usernameRegex, passwordRegex, phoneNumberRegex } = require('../utils/validators');

const carrierSchema = new Schema({
    company: {
        type: String,
        required: [true, 'Company name is required!'],
        unique: true,
        trim: true,
    },
    mcNumber: {
        type: Number,
        unique: true,
        trim: true,
    },
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
        match: emailRegex
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
        match: passwordRegex,
        minlength: [8, 'Password must be at least 8 characters long.'],
        maxlength: [30, 'Password must be no more than 30 characters long.'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required!'],
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return phoneNumberRegex.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    brokers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Broker'
        }
    ],
    invoices: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Invoice'
        }
    ]
}, {
    toJSON: { virtuals: true },
    id: false,
    timestamps: true,
});

carrierSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

const Carrier = model('Carrier', carrierSchema);

module.exports = Carrier;
