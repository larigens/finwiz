import { gql } from '@apollo/client';

// Get the logged in user's info
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      role
      fullName
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      fullName
      role
    }
  }
`;

export const GET_ALL_CARRIERS_BROKERS = gql`
  query getAllCarriersBrokers {
    carriers {
      _id
      company
      fullName
      mcNumber
    }
    brokers {
      _id
      mcNumber
      name
      buy
      creditScore
    }
  }
`;

export const GET_BROKER_BY_ID = gql`
  query Broker($brokerId: ID!) {
    broker(brokerId: $brokerId) {
      _id
      name
      mcNumber
      email
      phoneNumber
      creditScore
      buy
      invoices {
        amount
        loadNumber
        invoiceNumber
        invoiceDate
        shortPaid
        paid
        dueDate
        _id
      }
    }
  }
`;

export const GET_ALL_CARRIERS = gql`
  query Carriers {
    carriers {
      _id
      company
      mcNumber
      firstName
      lastName
      email
      phoneNumber
      invoices {
        _id
      }
      fullName
    }
  }
`;

export const GET_CARRIER_BY_ID = gql`
  query Carrier($carrierId: ID!) {
    carrier(carrierId: $carrierId) {
      _id
      company
      mcNumber
      firstName
      lastName
      email
      phoneNumber
      fullName
      invoices {
        _id
        invoiceNumber
        loadNumber
        amount
        paid
        shortPaid
        invoiceDate
        dueDate
      }
    }
  }
`;

export const GET_ALL_INVOICES = gql`
  query Invoices {
    invoices {
      _id
      invoiceNumber
      loadNumber
      amount
      paid
      shortPaid
      invoiceDate
      dueDate
      carrier {
        _id
      }
      broker {
        _id
      }
    }
  }
`;

export const GET_INVOICE_BY_ID = gql`
  query Invoices($invoiceId: ID!) {
    invoice(invoiceId: $invoiceId) {
      _id
      amount
      dueDate
      invoiceDate
      invoiceNumber
      loadNumber
      paid
      shortPaid
      carrier {
        _id
      }
      broker {
        _id
      }
    }
  }
`;

export const GET_INVOICE_BY_NUMBER = gql`
  query Query($invoiceNumber: Int!) {
    invoiceByNumber(invoiceNumber: $invoiceNumber) {
      _id
      invoiceNumber
      loadNumber
      amount
      paid
      shortPaid
      invoiceDate
      dueDate
      carrier {
        _id
      }
      broker {
        _id
      }
    }
  }
`;
