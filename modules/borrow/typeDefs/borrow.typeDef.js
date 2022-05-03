const { gql } = require("apollo-server-express");

const borrowTypeDef = gql`
  type Borrow {
    _id: ID!
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
    checkAllBorrowedRecords: [Borrow]
    getBorrowedBookByUserID(userID: String): [Borrow]
  }

  extend type Mutation {
    createBorrow(borrowData: BorrowInput): Borrow
    updateBorrowStatus(
      borrowID: ID
      bookID: String
      updateStatus: String
    ): Borrow
    updateFineStatus(
      borrowID: ID
      userID: String
      bookID: String
      updateStatus: String
    ): Borrow
  }
`;

module.exports = borrowTypeDef;
