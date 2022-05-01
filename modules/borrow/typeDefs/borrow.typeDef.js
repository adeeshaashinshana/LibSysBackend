const { gql } = require("apollo-server-express");

const borrowTypeDef = gql`
  type Borrow {
    _id: ID!
    borrowID: Int!
    userID: String!
    borrowDate: Date!
    borrowedBooks: [BorrowedBooks]
  }

  type BorrowedBooks {
    bookID: String
    bookType: String
    dueDate: Date
  }

  input BorrowInput {
    borrowID: Int
    userID: String
    borrowDate: Date
    borrowedBooks: [BorrowedBooksInput]
  }

  input BorrowedBooksInput {
    bookID: String
    bookType: String
    dueDate: Date
  }

  extend type Query {
    getBorrowedBookByUserID(userID: String): [Borrow]
  }

  extend type Mutation {
    createBorrow(borrowData: BorrowInput): Borrow
  }
`;

module.exports = borrowTypeDef;
