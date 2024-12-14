const express = require("express");
const router = express.Router();
const Member = require("../models/Member");

// import des middlewares
const getMember = require("../middlewares/getMember");

// Obtenir tous les membres
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir un membre par son memberId
router.get("/:memberId", getMember, (req, res) => {
  res.json(res.member);
});

module.exports = router;
