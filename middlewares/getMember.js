const Member = require("../models/Member");

async function getMember(req, res, next) {
  let member;
  try {
    member = await Member.findById(req.params.memberId);
    if (!member) {
      return res.status(404).json({ message: "Membre introuvable" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  res.member = member;
  next();
}

module.exports = getMember;
