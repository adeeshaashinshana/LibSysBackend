const { createApplication } = require("graphql-modules");
const UserModule = require("../modules/user/user.module");
const BorrowModule = require("../modules/borrow/borrow.module");
const application = createApplication({
  modules: [UserModule, BorrowModule],
});

module.exports = application;
