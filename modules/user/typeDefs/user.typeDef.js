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

  extend type Query {
    getUserByID(userID: String): User
  }

  extend type Mutation {
    createUser(userID: String): User
  }
`;

module.exports = userTypeDef;
