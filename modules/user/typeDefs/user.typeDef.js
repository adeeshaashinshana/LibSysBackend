const { gql } = require("apollo-server-express");

const userTypeDef = gql`
  type User {
    id: ID!
    userID: String!
    userName: String
    userEmail: String
    userType: String
    userState: String
  }

  input UserCreateInput {
    userID: String!
    userName: String
    userEmail: String
    userType: String
  }

  extend type Query {
    getUserByID(userID: String): User
  }

  extend type Mutation {
    createUser(newUser: UserCreateInput): User
  }
`;

module.exports = userTypeDef;
