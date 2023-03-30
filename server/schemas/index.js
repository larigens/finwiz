const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import type definitions and resolvers for each schema
const carrierTypeDefs = require('./Carrier/typeDefs');
const carrierResolvers = require('./Carrier/resolvers');
const brokerTypeDefs = require('./Broker/typeDefs');
const brokerResolvers = require('./Broker/resolvers');
const invoiceTypeDefs = require('./Invoice/typeDefs');
const invoiceResolvers = require('./Invoice/resolvers');
const userTypeDefs = require('./User/typeDefs');
const userResolvers = require('./User/resolvers');

// Merge typeDefs and resolvers
const mergedResolvers = mergeResolvers([carrierResolvers, brokerResolvers, invoiceResolvers, userResolvers])
const mergedTypeDefs = mergeTypeDefs([carrierTypeDefs, brokerTypeDefs, invoiceTypeDefs, userTypeDefs])

module.exports = { resolvers: mergedResolvers, typeDefs: mergedTypeDefs }
