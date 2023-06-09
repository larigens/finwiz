import { gql } from '@apollo/client';

// Create a new user
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
      role: $role
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Log in a user
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_INVOICE = gql`
  mutation AddInvoice(
    $invoiceNumber: Int!
    $loadNumber: String!
    $amount: Int!
    $carrier: ID!
    $broker: ID!
  ) {
    addInvoice(
      invoiceNumber: $invoiceNumber
      loadNumber: $loadNumber
      amount: $amount
      carrier: $carrier
      broker: $broker
    ) {
      _id
      amount
      invoiceNumber
      carrier {
        _id
      }
      broker {
        _id
      }
    }
  }
`;

export const ADD_PAYMENT = gql`
  mutation AddPayment(
    $checkNumber: String!
    $paidAmount: Int!
    $invoice: ID!
    $payDate: String
    $rebate: Boolean
    $rebateReason: String
    $shortPaidReason: String
  ) {
    addPayment(
      checkNumber: $checkNumber
      paidAmount: $paidAmount
      invoice: $invoice
      payDate: $payDate
      rebate: $rebate
      rebateReason: $rebateReason
      shortPaidReason: $shortPaidReason
    ) {
      _id
      checkNumber
      paidAmount
      rebate
      rebateReason
      shortPaidReason
      invoice {
        _id
      }
      payDate
    }
  }
`;

export const UPDATE_INVOICE = gql`
  mutation UpdateInvoice(
    $invoiceId: ID!
    $invoiceNumber: Int
    $loadNumber: String
    $amount: Int
    $carrier: ID
    $broker: ID
    $paid: Boolean
    $shortPaid: Boolean
  ) {
    updateInvoice(
      invoiceId: $invoiceId
      invoiceNumber: $invoiceNumber
      loadNumber: $loadNumber
      amount: $amount
      carrier: $carrier
      broker: $broker
      paid: $paid
      shortPaid: $shortPaid
    ) {
      _id
      amount
      broker {
        _id
      }
      carrier {
        _id
      }
      dueDate
      invoiceDate
      invoiceNumber
      loadNumber
      paid
      shortPaid
    }
  }
`;

export const REMOVE_INVOICE = gql`
  mutation RemoveInvoice($invoiceId: ID!) {
    removeInvoice(invoiceId: $invoiceId) {
      invoiceNumber
    }
  }
`;
