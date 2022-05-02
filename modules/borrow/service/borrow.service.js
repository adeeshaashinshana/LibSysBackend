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

  /******** updateBorrowStatus *******/
  async updateBorrowStatus(borrowID, bookID, updateStatus) {
    const borrowedRecord = await BorrowSchema.findById(borrowID);
    const updateBook = borrowedRecord.borrowedBooks.filter(
      (book) => book.bookID === bookID
    );
    if (updateBook.length > 0) {
      updateBook[0].returnState = updateStatus;
    }
    const restBooks = borrowedRecord.borrowedBooks.filter(
      (book) => book.bookID !== bookID
    );
    const updatedList = updateBook.concat(restBooks);

    const updatedBorrowedRecord = await BorrowSchema.findByIdAndUpdate(
      borrowID,
      {
        borrowedBooks: updatedList,
      },
      { new: true }
    );

    return updatedBorrowedRecord;
  }
}

module.exports = new BorrowService();
