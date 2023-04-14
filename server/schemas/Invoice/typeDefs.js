const { gql } = require('apollo-server-express');

  const typeDefs = gql`
  type Invoice {
    _id: ID!
    invoiceNumber: Int!
    loadNumber: String!
    amount: Int!
    paid: Boolean
    shortPaid: Boolean
    invoiceDate: String
    dueDate: String
    carrier: Carrier!
    broker: Broker!
    payment: Payment!
  }

  type Query {
    invoice(invoiceId: ID!): Invoice
    invoiceByNumber(invoiceNumber: Int!): Invoice
    invoices: [Invoice]
  }

  type Mutation {
    addInvoice(invoiceNumber: Int!, loadNumber: String!, amount: Int!, carrier: ID!, broker: ID!): Invoice!
    updateInvoice(invoiceId: ID!, invoiceNumber: Int, loadNumber: String, amount: Int, paid: Boolean, shortPaid: Boolean, carrier: ID, broker: ID, payment: ID): Invoice!
    removeInvoice(invoiceId: ID!): Invoice!  
    }
  `;

module.exports = typeDefs;
