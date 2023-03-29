const { Broker, Carrier } = require('../../models');

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
                throw new Error('Failed to fetch Broker.');
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
                throw new Error('Failed to fetch Brokers.');
            }
        },
    },
    Mutation: {
        addBroker: async (_, { input }) => {
            try {
                const { name, mcNumber, email, phoneNumber, creditScore, buy } = input;
                const broker = await Broker.create({ name, mcNumber, email, phoneNumber, creditScore, buy });
                return broker;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to create Broker.');
            }
        },
        updateBroker: async (_, { brokerId, input }) => {
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
                throw new Error('Failed to update Broker.');
            }
        },
        addBrokerCarrier: async (_, { brokerId, carrierId }) => {
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
                throw new Error('Failed to add carrier');
            }
        }
    },
};

module.exports = resolvers;  