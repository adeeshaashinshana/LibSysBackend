const { gql } = require("apollo-server-express");

const userTypeDef = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUserByID(userID: ID): User
  }
`;

module.exports = userTypeDef;
