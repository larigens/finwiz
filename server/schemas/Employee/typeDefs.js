const { gql } = require('apollo-server-express');

const typeDefs = gql`
input EmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
  }

  type Employee {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    fullName: String
  }

  # Set up an Auth type to handle returning data from an user sign up or login.
  type Auth {
    token: ID!
    employee: Employee
  }

  type Query {
    employee(employeeId: ID!): Employee
    employees: [Employee]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Employee
  }

  type Mutation {
    # Set up mutations to handle adding an employee or logging into a profile and return Auth type
    addEmployee(input: EmployeeInput!): Auth
    login(username: String!, password: String!): Auth
    updateEmployee(employeeId: ID!, input: EmployeeInput!): Employee!
    removeEmployee(employeeId: ID!): Employee!
  }
`;

module.exports = typeDefs;
