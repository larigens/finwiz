const { gql } = require('graphql-tag');

const typeDefs = gql`
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
    addCarrier(company: String!, mcNumber: Int, firstName: String!, lastName: String!, email: String!, phoneNumber: String!): Carrier!
    updateCarrier(carrierId: ID!, company: String!, mcNumber: Int, firstName: String!, lastName: String!, email: String!, phoneNumber: String!): Carrier!
    addCarrierBroker(carrierId: ID!, brokerId: ID!): Carrier!
    removeCarrier(carrierId: ID!): Carrier!
}
`;

module.exports = typeDefs;