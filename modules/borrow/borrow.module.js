const borrowModuleTypeDefs = require("./typeDefs/index");
const borrowModuleResolvers = require("./resolvers/index");
const { createModule } = require("graphql-modules");

const BorrowModule = createModule({
  id: "borrow-module",
  dirname: __dirname,
  typeDefs: borrowModuleTypeDefs,
  resolvers: borrowModuleResolvers,
});

module.exports = BorrowModule;
