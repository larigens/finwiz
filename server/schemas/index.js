const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import type definitions and resolvers for each schema
const carrierTypeDefs = require('./Carrier/typeDefs');
const carrierResolvers = require('./Carrier/resolvers');
const brokerTypeDefs = require('./Broker/typeDefs');
const brokerResolvers = require('./Broker/resolvers');
const invoiceTypeDefs = require('./Invoice/typeDefs');
const invoiceResolvers = require('./Invoice/resolvers');
const employeeTypeDefs = require('./Employee/typeDefs');
const employeeResolvers = require('./Employee/resolvers');

// Merge typeDefs and resolvers
const mergedResolvers = mergeResolvers([carrierResolvers, brokerResolvers, invoiceResolvers, employeeResolvers])
const mergedTypeDefs = mergeTypeDefs([carrierTypeDefs, brokerTypeDefs, invoiceTypeDefs, employeeTypeDefs])

module.exports = { resolvers: mergedResolvers, typeDefs: mergedTypeDefs }
