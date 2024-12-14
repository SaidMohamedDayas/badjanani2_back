const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  _id: { type: String, alias: "memberId", required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
});

module.exports = mongoose.model("Member", MemberSchema);
