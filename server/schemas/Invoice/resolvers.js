const { Invoice, Carrier, Broker } = require('../../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        invoice: async (_, { invoiceId }) => {
            try {
                const invoice = await Invoice.findOne({ _id: invoiceId })
                    .select('-__v')
                    .populate('carrier')
                    .populate('broker')
                return invoice;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch invoice.');
            }
        },
        invoices: async () => {
            try {
                const invoices = await Invoice.find()
                    .populate('carrier')
                    .populate('broker')
                return invoices;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch invoices.');
            }
        },
    },
    Invoice: {
        invoiceCount: (invoice) => invoice.invoices.length,
    },
    Mutation: {
        addInvoice: async (_, { invoiceNumber, loadNumber, amount, carrier, broker }, context) => {
            if (context.user) {
                try {
                    // Creates the invoice.
                    const invoice = await Invoice.create({ invoiceNumber, loadNumber, amount, carrier, broker });
                    // Add the new invoice to the carrier collection.
                    const updateCarrier = await Carrier.findOneAndUpdate(
                        { _id: carrier },
                        { $push: { invoices: invoice._id } },
                        { new: true }
                    );
                    // Checks if the carrier exist.
                    if (!updateCarrier) {
                        throw new Error('Carrier not found');
                    }
                    // Add the new invoice to the broker collection.
                    const updateBroker = await Broker.findOneAndUpdate(
                        { _id: broker },
                        { $push: { invoices: invoice._id } },
                        { new: true }
                    );
                    // Checks if the broker exist.
                    if (!updateBroker) {
                        throw new Error('Broker not found');
                    }
                    return invoice;
                } catch (err) {
                    console.log(err);
                    throw new Error('Failed to create invoice.');
                }
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateInvoice: async (_, { invoiceId, invoiceNumber, loadNumber, amount, paid, shortPaid, carrier, broker }, context) => {
            if (context.user) {
                try {

                    const existingInvoice = await Invoice.findOne({ _id: invoiceId });
                    if (!existingInvoice) {
                        throw new Error('Invoice not found');
                    }

                    const updates = { invoiceNumber, loadNumber, amount, paid, shortPaid, carrier, broker };

                    // If the carrier field is being updated, we need to remove the invoice from the old carrier and add it to the new one.
                    if (carrier && carrier !== existingInvoice.carrier) {
                        await Carrier.findOneAndUpdate(
                            { _id: existingInvoice.carrier },
                            { $pull: { invoices: invoiceId } },
                            { new: true }
                        );
                        const newCarrier = await Carrier.findOneAndUpdate(
                            { _id: carrier },
                            { $addToSet: { invoices: invoiceId } },
                            { new: true }
                        );
                        if (!newCarrier) {
                            throw new Error('Carrier not found');
                        }
                    }

                    // If the broker field is being updated, we need to remove the invoice from the old broker and add it to the new one.
                    if (broker && broker !== existingInvoice.broker) {
                        await Broker.findOneAndUpdate(
                            { _id: existingInvoice.broker },
                            { $pull: { invoices: invoiceId } },
                            { new: true }
                        );
                        const newBroker = await Broker.findOneAndUpdate(
                            { _id: broker },
                            { $addToSet: { invoices: invoiceId } },
                            { new: true }
                        );
                        if (!newBroker) {
                            throw new Error('Broker not found');
                        }
                    }

                    const updatedInvoice = await Invoice.findOneAndUpdate(
                        { _id: invoiceId },
                        { $set: updates },
                        { new: true, runValidators: true }
                    );

                    return updatedInvoice;
                } catch (error) {
                    console.error(error);
                    throw new Error('Failed to update invoice');
                }
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeInvoice: async (_, { invoiceId }, context) => {
            if (context.user) {
                try {
                    return Invoice.findOneAndDelete({ _id: invoiceId });
                } catch (err) {
                    console.log(err);
                    throw new Error('Failed to remove invoice.');
                }
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;
