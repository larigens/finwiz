const { gql } = require('apollo-server-express');

const typeDefs = gql`
input CarrierInput {
  company: String!,
  mcNumber: Int,
  firstName: String!,
  lastName: String!,
  email: String!,
  phoneNumber: String!
}

type Carrier {
  _id: ID!
  company: String!
  mcNumber: Int
  firstName: String!
  lastName: String!
  email: String!
  phoneNumber: String!
  brokers: [Broker]
  invoices: [Invoice]
  fullName: String!
}

type Query {
    carrier(carrierId: ID!): Carrier
    carriers: [Carrier]
}

type Mutation {
    addCarrier(input: CarrierInput!): Carrier!
    updateCarrier(carrierId: ID!, input: CarrierInput!): Carrier!
    addCarrierBroker(carrierId: ID!, brokerId: ID!): Carrier!
}
`;

module.exports = typeDefs;