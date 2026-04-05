const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// ➕ Add Investment
router.post("/add", async (req, res) => {
  try {
    console.log("🔥 Incoming Data:", req.body); // ADD THIS

    const item = new Portfolio(req.body);
    await item.save();

    console.log("✅ Saved to MongoDB"); // ADD THIS

    res.send("Investment Saved");
  } catch (err) {
    console.log(err); // ADD THIS
    res.status(500).send("Error saving investment");
  }
});

// 📥 Get User Portfolio
router.get("/:userId", async (req, res) => {
  try {
    const data = await Portfolio.find({ userId: req.params.userId });
    res.send(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

// ❌ Delete
router.delete("/:id", async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// ✏️ Update
router.put("/:id", async (req, res) => {
  await Portfolio.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

module.exports = router;