const createEnum = require("../../shared/createEnum");

const FineState = createEnum(["NO_FINE", "PAID", "UNPAID"]);

module.exports = FineState;
