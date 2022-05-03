const Logger = require("../../../shared/logger");

const BorrowService = require("../service/borrow.service");

const borrowResolver = {
  Query: {
    /******* checkAllBorrowedRecords ******/
    checkAllBorrowedRecords: async (_, __) => {
      try {
        Logger.info("==========< checkAllBorrowedRecords >==========");
        return await BorrowService.checkAllBorrowedRecords();
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },

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

    /******* updateBorrowStatus ******/
    updateBorrowStatus: async (_, args) => {
      try {
        Logger.info("==========< updateBorrowStatus >==========");
        const { borrowID, bookID, updateStatus } = args;
        return await BorrowService.updateBorrowStatus(
          borrowID,
          bookID,
          updateStatus
        );
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },

    /******* updateFineStatus ******/
    updateFineStatus: async (_, args) => {
      try {
        Logger.info("==========< updateFineStatus >==========");
        const { borrowID, bookID, updateStatus } = args;
        return await BorrowService.updateFineStatus(
          borrowID,
          bookID,
          updateStatus
        );
      } catch (error) {
        Logger.error(error);
        throw error;
      }
    },
  },
};

module.exports = borrowResolver;
