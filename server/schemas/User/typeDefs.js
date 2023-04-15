const { gql } = require('graphql-tag');

const typeDefs = gql`
input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    role: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    role: String!
    fullName: String
    employeeProperty: EmployeeProperty
  }

  type EmployeeProperty {
    user: User
    carriers: [Carrier]
  }
  
  # Set up an Auth type to handle returning data from an user sign up or login.
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    # Set up mutations to handle adding an User or logging into a profile and return Auth type
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!, role: String!): Auth
    loginUser(username: String!, password: String!): Auth
    addUserCarrier(userId: ID!, carrierId: ID!): EmployeeProperty
    updateUser(userId: ID!, input: UserInput!): User!
    removeUser(userId: ID!): User!
  }
`;

module.exports = typeDefs;
