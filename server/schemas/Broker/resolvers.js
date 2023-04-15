const { Broker, Carrier } = require('../../models');
const { GraphQLError } = require('graphql');

const resolvers = {
    Query: {
        broker: async (_, { brokerId }) => {
            try {
                const broker = await Broker.findOne({ _id: brokerId })
                    .select('-__v')
                    .populate('carriers')
                    .populate('invoices')
                return broker;
            } catch (error) {
                console.error(error);
                throw new Error(`Error retrieving broker: ${err.message}`);
            }
        },
        brokers: async () => {
            try {
                const brokers = await Broker.find()
                    .populate('carriers')
                    .populate('invoices')
                return brokers;
            } catch (error) {
                console.error(error);
                throw new Error(`Error retrieving brokers: ${err.message}`);
            }
        },
    },
    Mutation: {
        addBroker: async (_, { input }, context) => {
            if (context.user) {
                try {
                    const { name, mcNumber, email, phoneNumber, creditScore, buy } = input;
                    const broker = await Broker.create({ name, mcNumber, email, phoneNumber, creditScore, buy });
                    return broker;
                } catch (error) {
                    console.error(error);
                    throw new Error(`Error adding broker: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
        updateBroker: async (_, { brokerId, input }, context) => {
            if (context.user) {
                try {
                    const { name, mcNumber, email, phoneNumber, creditScore, buy } = input;
                    const broker = await Broker.findOneAndUpdate(
                        { _id: brokerId },
                        { $set: name, mcNumber, email, phoneNumber, creditScore, buy },
                        { new: true, runValidators: true }
                    );
                    // Checks if the broker exist.
                    if (!broker) {
                        throw new Error('Broker not found');
                    }
                    return broker;
                } catch (error) {
                    console.error(error);
                    throw new Error(`Error updating broker: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
        addBrokerCarrier: async (_, { brokerId, carrierId }, context) => {
            if (context.user) {
                try {
                    const broker = await Broker.findOneAndUpdate(
                        { _id: brokerId },
                        { $addToSet: { carriers: carrierId } },
                        { new: true, runValidators: true }
                    )
                    const carrier = await Carrier.findOneAndUpdate(
                        { _id: carrierId },
                        { $addToSet: { brokers: brokerId } },
                        { new: true }
                    );
                    if (!carrier) {
                        throw new Error('Carrier not found');
                    }
                    // Populate the carrier field in the broker and return it
                    const result = await broker.populate('carriers')
                    return result;
                } catch (error) {
                    console.error(error);
                    throw new Error(`Error adding broker-carrier relationship: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
        removeBroker: async (_, { brokerId }, context) => {
            if (context.user) {
                try {
                    return Broker.findOneAndDelete({ _id: brokerId });
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error removing broker: ${err.message}`);
                }
            }
            throw new GraphQLError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;  