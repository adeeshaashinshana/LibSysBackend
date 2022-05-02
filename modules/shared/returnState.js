const createEnum = require("../../shared/createEnum");

const ReturnState = createEnum(["PENDING", "RETURNED", "OVERDUE"]);

module.exports = ReturnState;
