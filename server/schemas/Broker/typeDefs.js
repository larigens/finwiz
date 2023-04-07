const { gql } = require('apollo-server-express');

const typeDefs = gql`
input BrokerInput {
    name: String!
    mcNumber: Int
    email: String!
    phoneNumber: String!
    creditScore: Int!
    buy: Boolean!
}

type Broker {
    _id: ID!
    name: String!
    mcNumber: Int
    email: String!
    phoneNumber: String!
    creditScore: Int!
    buy: Boolean!
    carriers: [Carrier]
    invoices: [Invoice]
}

type Query {
    broker(brokerId: ID!): Broker
    brokers: [Broker]
}

type Mutation {
    addBroker( name: String!, mcNumber: Int, email: String!, phoneNumber: String!, creditScore: Int!, buy: Boolean!): Broker!
    updateBroker(brokerId: ID!, input: BrokerInput!): Broker!
    addBrokerCarrier(brokerId: ID!, carrierId: ID!): Broker!
}
`;

module.exports = typeDefs;