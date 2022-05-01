const createEnum = require("../../shared/createEnum");

const UserState = createEnum(["ACTIVE", "SUSPEND"]);

module.exports = UserState;
