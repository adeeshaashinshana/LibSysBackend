const { gql } = require("apollo-server-express");

const userTypeDef = gql`
  type User {
    id: ID!
    userID: String!
    userName: String
    userEmail: String
    userType: String
    userState: String
    totalFines: Int
  }

  type Query {
    getUserByID(userID: String): User
  }
`;

module.exports = userTypeDef;
