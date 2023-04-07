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