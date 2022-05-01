const { gql } = require("apollo-server-express");

const sharedTypeDef = gql`
  scalar Date

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

module.exports = sharedTypeDef;
