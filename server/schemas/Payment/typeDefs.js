const { gql } = require('graphql-tag');

const typeDefs = gql`
type Payment {
    _id: ID!
    checkNumber: String!
    paidAmount: Int!
    payDate: String!
    rebate: Boolean!
    rebateReason: String
    shortPaidReason: String
    invoice: Invoice!
  }
  
  type Query {
    payment(paymentId: ID!): Payment
    payments: [Payment]
  }
  
  type Mutation {
    addPayment(checkNumber: String!, paidAmount: Int!, payDate: String, rebate: Boolean, rebateReason: String, shortPaidReason: String, invoice: ID!): Payment!
    updatePayment(paymentId: ID!, checkNumber: String!, paidAmount: Int!, payDate: String, rebate: Boolean, rebateReason: String, shortPaidReason: String, invoice: ID!): Payment!
    removePayment(paymentId: ID!): Payment!
  }
 `;

module.exports = typeDefs;