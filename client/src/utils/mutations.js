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
mutation addInvoice($invoiceNumber: Int!, $loadNumber: String!, $amount: Int!, $carrier: ID!, $broker: ID!) {
  addInvoice(invoiceNumber: $invoiceNumber, loadNumber: $loadNumber, amount: $amount, carrier: $carrier, broker: $broker) {
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