const { Schema, model } = require('mongoose');
const { emailRegex, phoneNumberRegex } = require('../utils/validators');

const brokerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mcNumber: {
        type: Number,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        lowercase: true,
        trim: true,
        match: emailRegex
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
        }
    },
    creditScore: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    buy: {
        type: Boolean,
        required: true,
    },
    carriers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Carrier'
        }
    ],
    invoices: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Invoice'
        }
    ]
},
    {
        timestamps: true,
    }
);

const Broker = model('Broker', brokerSchema);

module.exports = Broker;
