const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userSchema);
