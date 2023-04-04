import { gql } from '@apollo/client';

// Create a new user
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!, $role: String!) {
    addUser(firstName: $firstName, lastName: $lastName,  email: $email, username: $username, password: $password, role: $role) {
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
