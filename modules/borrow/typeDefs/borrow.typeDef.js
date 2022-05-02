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
    recordID: Int
    bookID: String
    bookType: String
    dueDate: Date
    returnState: String
    returnedDate: Date
    fines: Int
    fineState: String
  }

  input BorrowInput {
    userID: String
    borrowedBooks: [BorrowedBooksInput]
  }

  input BorrowedBooksInput {
    recordID: Int
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