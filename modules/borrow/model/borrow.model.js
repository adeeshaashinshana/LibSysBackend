const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema(
  {
    borrowID: {
      type: Number,
      required: true,
    },
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
        bookID: {
          type: String,
        },
        bookType: {
          type: String,
        },
        dueDate: {
          type: Date,
        },
      },
    ],
  },
  {
    collection: "borrow",
  }
);

module.exports = mongoose.model("Borrow", borrowSchema);
