const { Carrier, Broker } = require('../../models');
const { GraphQLError } = require('graphql');

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
                throw new Error(`Error retrieving carrier: ${err.message}`);
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
                throw new Error(`Error retrieving carrier: ${err.message}`);
            }
        },
    },
    Mutation: {
        // Add a third argument to the resolver to access data in our `context`
        addCarrier: async (_, { input }, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            if (context.user) {
                try {
                    const { company, mcNumber, firstName, lastName, email, phoneNumber } = input;
                    const carrier = await Carrier.create({ company, mcNumber, firstName, lastName, email, phoneNumber });
                    return carrier;
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error adding carrier: ${err.message}`);
                }
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw new GraphQLError('You need to be logged in!');
        },
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
                    throw new Error(`Error updating carrier: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
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
                    throw new Error(`Error adding carrier-broker relationship: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
        removeCarrier: async (_, { carrierId }, context) => {
            if (context.user) {
                try {
                    return Carrier.findOneAndDelete({ _id: carrierId });
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error removing carrier: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;
