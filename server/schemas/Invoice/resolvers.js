const { Invoice, Carrier, Broker } = require('../../models');

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
        addInvoice: async (_, { input }) => {
            try {
                const { invoiceNumber, loadNumber, amount, paid, shortPaid, carrier, broker } = input;
                // Creates the invoice.
                const invoice = await Invoice.create({ invoiceNumber, loadNumber, amount, paid, shortPaid, carrier, broker });

                // Add the new invoice to the carrier collection.
                const updateCarrier = Carrier.findOneAndUpdate(
                    { _id: carrier },
                    { $push: { invoices: invoice._id } },
                    { new: true }
                );
                // Checks if the carrier exist.
                if (!updateCarrier) {
                    throw new Error('Carrier not found');
                }
                // Add the new invoice to the broker collection.
                const updateBroker = Broker.findOneAndUpdate(
                    { _id: broker },
                    { $push: { invoices: invoice._id } },
                    { new: true }
                );
                // Checks if the broker exist.
                if (!updateBroker) {
                    throw new Error('Broker not found');
                }
                await Promise.all([updateCarrier, updateBroker]);

                // Populate the carrier and broker fields in the invoice and return it
                const populatedInvoice = await invoice.populate('carrier').populate('broker')
                return populatedInvoice;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to create invoice.');
            }
        },
        updateInvoice: async (_, { invoiceId, input }) => {
            try {
                const { invoiceNumber, loadNumber, amount, paid, shortPaid, carrier, broker } = input;

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
        },
        removeInvoice: async (_, { invoiceId }) => {
            try {
                return Invoice.findOneAndDelete({ _id: invoiceId });
            } catch (err) {
                console.log(err);
                throw new Error('Failed to remove invoice.');
            }
        },
    }
}

module.exports = resolvers;
