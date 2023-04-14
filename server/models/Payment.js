const { Schema, model } = require('mongoose');

const paymentSchema = new Schema(
    {
        checkNumber: {
            type: String,
            required: true,
        },
        paidAmount: {
            type: Number,
            required: true,
        },
        payDate: {
            type: Date,
            default: Date.now,
            get: function (timestamp) {
                return timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
                // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
            }
        },
        rebate: {
            type: Boolean,
            default: false,
        },
        rebateReason: {
            type: String,
            default: 'N/A',
        },
        shortPaidReason: {
            type: String,
            default: 'N/A',
        },
        invoice: {
            type: Schema.Types.ObjectId,
            ref: 'Invoice',
            required: true,
        },
    }
);

const Payment = model('Payment', paymentSchema);

module.exports = Payment;