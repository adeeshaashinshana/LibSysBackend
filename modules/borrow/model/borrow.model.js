const mongoose = require("mongoose");
const ReturnState = require("../../shared/returnState");
const FineState = require("../../shared/fineState");

const borrowSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      ref: "User",
    },
    borrowDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    borrowedBooks: [
      {
        recordID: {
          type: Number,
        },
        bookID: {
          type: String,
        },
        bookType: {
          type: String,
        },
        dueDate: {
          type: Date,
        },
        returnState: {
          type: ReturnState,
          default: ReturnState.PENDING,
        },
        returnedDate: {
          type: Date,
        },
        fines: {
          type: Number,
          default: 0,
        },
        fineState: {
          type: FineState,
          default: FineState.NO_FINE,
        },
      },
    ],
  },
  {
    collection: "borrow",
  }
);

module.exports = mongoose.model("Borrow", borrowSchema);
