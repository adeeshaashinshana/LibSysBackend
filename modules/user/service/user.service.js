const UserSchema = require("../model/user.model");
const Logger = require("../../../shared/logger");

class UserService {
  /******** Get User By ID *******/
  async getUserByID(userID) {
    const userData = await UserSchema.findOne({ userID: userID });
    return userData;
  }

  /******** Create User *******/
  async createUser(userID) {
    if (userID !== "") {
      return await UserSchema.create(user);
    }
  }

  /******** Update User *******/
  async updateUser(userID, userState) {
    Logger.info("==========< updateUserState >==========");
    const filter = { userID: userID };
    const update = { userState: userState };

    const updatedUser = await UserSchema.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });

    return updatedUser;
  }
}

module.exports = new UserService();
