const BorrowSchema = require("../model/borrow.model");

class BorrowService {
  /******** get Borrowed Book By ID *******/
  async getBorrowedBookByUserID(userID) {
    return await BorrowSchema.find({ userID: userID });
  }

  /******** createBorrow *******/
  async createBorrow(borrowData) {
    return await BorrowSchema.create(borrowData);
  }
}

module.exports = new BorrowService();
