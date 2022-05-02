const Logger = require("../../../shared/logger");

const BorrowService = require("../service/borrow.service");

const borrowResolver = {
  Query: {
    /******* getBorrowedBookByUserID ******/
    getBorrowedBookByUserID: async (_, args) => {
      try {
        Logger.info("==========< getBorrowedBookByUserID >==========");
        const { userID } = args;
        return await BorrowService.getBorrowedBookByUserID(userID);
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },
  },

  Mutation: {
    /******* createBorrow ******/
    createBorrow: async (_, args) => {
      try {
        Logger.info("==========< createBorrow >==========");
        const { borrowData } = args;
        return await BorrowService.createBorrow(borrowData);
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },
  },
};

module.exports = borrowResolver;
