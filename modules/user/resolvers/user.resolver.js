const Logger = require("../../../shared/logger");

const UserService = require("../service/user.service");

const userResolver = {
  Query: {
    /******* getUserByID ******/
    getUserByID: async (_, args) => {
      try {
        Logger.info("==========< getUser >==========");
        const { userID } = args;
        return await UserService.getUserByID(userID);
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },
  },
};

module.exports = userResolver;
