const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema(
    {
        invoiceNumber: {
            type: Number,
            required: true,
            maxLength: 30,
        },
        loadNumber: {
            type: String,
            required: true,
            maxLength: 30,
        },
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        paid: {
            type: Boolean,
            default: false,
        },
        shortPaid: {
            type: Boolean,
            default: false,
        },
        invoiceDate: {
            type: Date,
            default: Date.now,
            get: function (timestamp) {
                return timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
                // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
            }
        },
        dueDate: {
            type: Date,
            default: function () {
                const now = new Date();
                const thirtyDaysFromNow = now.setDate(now.getDate() + 30);
                return thirtyDaysFromNow;
            },
            get: function (timestamp) {
                return timestamp.toLocaleString();
            }
        },
        carrier: {
            type: Schema.Types.ObjectId,
            ref: 'Carrier',
            required: true,
        },
        broker: {
            type: Schema.Types.ObjectId,
            ref: 'Broker',
            required: true,
        },
    }, {
    toJSON: { virtuals: true },
    id: false,
}
);

invoiceSchema.virtual('invoiceCount').get(function () {
    return this.length;
});

const Invoice = model('Invoice', invoiceSchema);

module.exports = Invoice;