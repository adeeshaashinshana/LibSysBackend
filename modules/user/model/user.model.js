const mongoose = require("mongoose");
const UserState = require("../../shared/userState");
const UserType = require("../../shared/userType");

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userType: {
      type: UserType,
      default: UserType.STUDENT,
    },
    userState: {
      type: UserState,
      default: UserState.ACTIVE,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userSchema);
