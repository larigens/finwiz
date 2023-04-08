const { Carrier, Broker } = require('../../models');
const { AuthenticationError } = require('apollo-server-express');

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
        updateCarrier: async (_, { carrierId, input }, context) => {
            if (context.user) {
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
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addCarrierBroker: async (_, { carrierId, brokerId }, context) => {
            if (context.user) {
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
            throw new AuthenticationError('You need to be logged in!');
        }
    },
};

module.exports = resolvers;
