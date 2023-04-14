const { Invoice, Payment } = require('../../models');
const { AuthenticationError } = require('apollo-server-express');

// add context later
const resolvers = {
    Query: {
        payment: async (_, { paymentId }) => {
            try {
                const payment = await Payment.findOne({ _id: paymentId })
                    .select('-__v')
                    .populate('invoice')
                return payment;
            } catch (err) {
                throw new Error(`Error retrieving payment: ${err.message}`);
            }
        },
        payments: async () => {
            try {
                const payments = await Payment.find()
                    .populate('invoice')
                return payments;
            } catch (err) {
                throw new Error(`Error retrieving payments: ${err.message}`);
            }
        },
    },
    Mutation: {
        addPayment: async (_, { checkNumber, paidAmount, payDate, rebate, rebateReason, shortPaidReason, invoice }, context) => {
            if (context.user) {
                try {
                    const payment = await Payment.create({ checkNumber, paidAmount, payDate, rebate, rebateReason, shortPaidReason, invoice });

                    const updateInvoice = await Invoice.findOneAndUpdate(
                        { _id: invoice },
                        { $set: { payment: payment._id } },
                        { new: true }
                    );
                    // Checks if the invoice exist.
                    if (!updateInvoice) {
                        throw new Error('Invoice not found');
                    }
                    return payment;
                } catch (err) {
                    throw new Error(`Error adding payment: ${err.message}`);
                }
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updatePayment: async (_, { paymentId, checkNumber, paidAmount, payDate, rebate, rebateReason, shortPaidReason, invoice }) => {
            try {
                const existingPayment = await Payment.findOne({ _id: paymentId });
                if (!existingPayment) {
                    throw new Error('Payment not found');
                }
                const updates = { checkNumber, paidAmount, payDate, rebate, rebateReason, shortPaidReason, invoice }

                if (invoice && invoice !== existingPayment.invoice) {
                    await Invoice.findOneAndUpdate(
                        { _id: existingPayment.invoice },
                        { $unset: { payment: "" } },
                        { new: true }
                    );
                    const newInvoice = await Invoice.findOneAndUpdate(
                        { _id: invoice },
                        { $set: { payment: paymentId } },
                        { new: true }
                    );
                    if (!newInvoice) {
                        throw new Error('Invoice not found');
                    }
                }

                const updatedPayment = await Payment.findOneAndUpdate(
                    { _id: paymentId },
                    { $set: updates },
                    { new: true, runValidators: true }
                );

                return updatedPayment;
            } catch (err) {
                throw new Error(`Error updating payment: ${err.message}`);
            }
        },
        removePayment: async (_, { paymentId }) => {
            try {
                return Payment.findOneAndDelete({ _id: paymentId });
            } catch (err) {
                throw new Error(`Error removing payment: ${err.message}`);
            }
        },
    },
};

module.exports = resolvers;
