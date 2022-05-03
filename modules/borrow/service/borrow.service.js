const BorrowSchema = require("../model/borrow.model");
const Logger = require("../../../shared/logger");
const UserService = require("../../user/service/user.service");
const Constant = require("../../shared/constants");
class BorrowService {
  /******** checkAllBorrowedRecords *******/
  async checkAllBorrowedRecords() {
    const allRecords = await BorrowSchema.find();

    await allRecords.forEach(async (record) => {
      await record.borrowedBooks.forEach(async (book) => {
        let dueDate = book.dueDate;
        const CurrentDate = new Date();
        dueDate = new Date(dueDate);

        if (
          dueDate.setHours(0, 0, 0, 0) < CurrentDate.setHours(0, 0, 0, 0) &&
          book.returnState !== Constant.ReturnState.RETURNED
        ) {
          const user = await UserService.getUserByID(record.userID);
          const lateDays = await this.lateDayCounter(CurrentDate, dueDate);
          let fineValue = 0;

          if (
            user.userType === Constant.UserType.STUDENT &&
            book.bookType === Constant.BookState.REFERENCE
          ) {
            fineValue = lateDays * 50;
            // totalFines += fineValue;
          }
          if (
            user.userType === Constant.UserType.STUDENT &&
            book.bookType === Constant.BookState.LENDING
          ) {
            fineValue = lateDays * 10;
            // totalFines += fineValue;
          }
          if (
            user.userType === Constant.UserType.STAFF_MEMBER &&
            book.bookType === Constant.BookState.REFERENCE
          ) {
            fineValue = lateDays * 80;
            // totalFines += fineValue;
          }
          if (
            user.userType === Constant.UserType.STAFF_MEMBER &&
            book.bookType === Constant.BookState.LENDING
          ) {
            fineValue = lateDays * 20;
            // totalFines += fineValue;
          }
          await this.updateFineValues(record.id, book.bookID, fineValue);
        }
      });
    });
    return allRecords;
  }

  async lateDayCounter(CurrentDate, dueDate) {
    const diffTime = Math.abs(CurrentDate - dueDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  /******** get Borrowed Book By ID *******/
  async getBorrowedBookByUserID(userID) {
    return await BorrowSchema.find({ userID: userID });
  }

  /******** createBorrow *******/
  async createBorrow(borrowData) {
    return await BorrowSchema.create(borrowData);
  }

  /******** updateBorrowStatus *******/
  async updateBorrowStatus(borrowID, bookID, updateStatus) {
    const updatedBorrowedRecord = await BorrowSchema.findOneAndUpdate(
      { _id: borrowID, "borrowedBooks.bookID": bookID },
      {
        $set: {
          "borrowedBooks.$.returnState": updateStatus,
        },
      }
    );
    return updatedBorrowedRecord;
  }

  /******** updateFineStatus *******/
  async updateFineStatus(borrowID, bookID, updateStatus) {
    const updatedBorrowedRecord = await BorrowSchema.findOneAndUpdate(
      { _id: borrowID, "borrowedBooks.bookID": bookID },
      {
        $set: {
          "borrowedBooks.$.fineState": updateStatus,
        },
      }
    );
    return updatedBorrowedRecord;
  }

  /******** updateFineValues *******/
  async updateFineValues(borrowID, bookID, fineValue) {
    Logger.info("==========< updateFineValues >==========");
    const updatedBorrowedRecord = await BorrowSchema.findOneAndUpdate(
      { _id: borrowID, "borrowedBooks.bookID": bookID },
      {
        $set: {
          "borrowedBooks.$.fines": fineValue,
          "borrowedBooks.$.returnState": Constant.ReturnState.OVERDUE,
          "borrowedBooks.$.fineState": Constant.FineState.UNPAID,
        },
      }
    );
    return updatedBorrowedRecord;
  }
}

module.exports = new BorrowService();
