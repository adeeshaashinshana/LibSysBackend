"use strict";
const nodemailer = require("nodemailer");
const Logger = require("./logger");

async function sendRemindEmail(overdueDays, bookID, userEmail) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adeeshaashinshana@gmail.com",
      pass: "jtlyypefrdlecgrz",
    },
  });

  let info = await transporter.sendMail({
    from: "adeeshaashinshana@gmail.com",
    to: `${userEmail}`,
    subject: "Reminder About Overdue Borrowed Books",
    html: `<b>${bookID} Book still not returned.!</b><br><p>You have passed ${
      overdueDays > 1 ? `${overdueDays}days` : `${overdueDays}day`
    } from your due date for above mentioned book. Please return it soon as possible!</p>`,
  });
  Logger.info(
    `==========< Reminder sent to: ", ${info.envelope.to[0]} >==========`
  );
}

module.exports = sendRemindEmail;
