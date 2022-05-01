const UserSchema = require("../model/user.model");

class UserService {
  /******** Get User By ID *******/
  async getUserByID(userID) {
    return await UserSchema.findOne({ userID: userID });
  }
}

module.exports = new UserService();
