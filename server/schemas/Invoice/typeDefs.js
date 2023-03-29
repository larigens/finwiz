const { gql } = require('apollo-server-express');

const typeDefs = gql`
input InvoiceInput {
  invoiceNumber: Int!
  loadNumber: String!
  amount: Int!
  paid: Boolean!
  shortPaid: Boolean!
  carrier: ID!
  broker: ID!
}

type Invoice {
  _id: ID!
  invoiceNumber: Int!
  loadNumber: String!
  amount: Int!
  paid: Boolean!
  shortPaid: Boolean!
  invoiceDate: String!
  dueDate: String!
  carrier: Carrier!
  broker: Broker!
}

type Query {
  invoice(invoiceId: ID!): Invoice
  invoices: [Invoice]
}

type Mutation {
  addInvoice(input: InvoiceInput!): Invoice!
  updateInvoice(invoiceId: ID!, input: InvoiceInput!): Invoice!
  removeInvoice(invoiceId: ID!): Invoice!  
  }
`;

module.exports = typeDefs;
