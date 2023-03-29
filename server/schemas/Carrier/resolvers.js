const { Carrier, Broker } = require('../../models');

const resolvers = {
    Query: {
        carrier: async (_, { carrierId }) => {
            try {
                const carrier = await Carrier.findOne({ _id: carrierId })
                    .select('-__v')
                    .populate('brokers')
                    .populate('invoices')
                return carrier;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch carrier.');
            }
        },
        carriers: async () => {
            try {
                const carriers = await Carrier.find()
                    .populate('brokers')
                    .populate('invoices')
                return carriers;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch carriers.');
            }
        },
    },
    Mutation: {
        addCarrier: async (_, { input }) => {
            try {
                const { company, mcNumber, firstName, lastName, email, phoneNumber } = input;
                const carrier = await Carrier.create({ company, mcNumber, firstName, lastName, email, phoneNumber });
                return carrier;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to create carrier.');
            }
        },
        updateCarrier: async (_, { carrierId, input }) => {
            try {
                const { company, mcNumber, firstName, lastName, email, phoneNumber } = input;
                const carrier = await Carrier.findOneAndUpdate(
                    { _id: carrierId },
                    { $set: company, mcNumber, firstName, lastName, email, phoneNumber },
                    { new: true, runValidators: true }
                );
                if (!carrier) {
                    throw new Error('Carrier not found');
                }
                return carrier;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to update carrier.');
            }
        },
        addCarrierBroker: async (_, { carrierId, brokerId }) => {
            try {
                const carrier = await Carrier.findOneAndUpdate(
                    { _id: carrierId },
                    { $addToSet: { brokers: brokerId } }, // will add the broker only if it is not already in the array
                    { new: true, runValidators: true }
                )
                // Add the carrier to the broker collection.
                const broker = await Broker.findOneAndUpdate(
                    { _id: brokerId },
                    { $addToSet: { carriers: carrierId } },
                    { new: true }
                );
                if (!broker) {
                    throw new Error('Broker not found');
                }
                // Populate the broker field in the carrier and return it
                const result = await carrier.populate('brokers')
                return result;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to add broker');
            }
        }
    },
};

module.exports = resolvers;
