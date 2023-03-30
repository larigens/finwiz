const { Schema, model } = require('mongoose');
const { emailRegex, phoneNumberRegex } = require('../utils/validators');

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
        match: [emailRegex, 'Must match an email address!'],
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
