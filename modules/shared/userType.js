const createEnum = require("../../shared/createEnum");

const UserType = createEnum(["STUDENT", "STAFF_MEMBER"]);

module.exports = UserType;
