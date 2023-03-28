const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

// Import type definitions and resolvers for each schema
const carrierTypeDefs = require('./Carrier/typeDefs');
const carrierResolvers = require('./Carrier/resolvers');
const brokerTypeDefs = require('./Broker/typeDefs');
const brokerResolvers = require('./Broker/resolvers');
const invoiceTypeDefs = require('./Invoice/typeDefs');
const invoiceResolvers = require('./Invoice/resolvers');

// Merge typeDefs and resolvers
const mergedTypeDefs = mergeTypeDefs([
    carrierTypeDefs,
    brokerTypeDefs,
    invoiceTypeDefs,
]);

const mergedResolvers = mergeResolvers([
    carrierResolvers,
    brokerResolvers,
    invoiceResolvers,
]);

module.exports = { mergedTypeDefs, mergedResolvers };
