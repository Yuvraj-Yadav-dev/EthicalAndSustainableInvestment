const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const response = await fetch(
    "https://gnews.io/api/v4/search?q=sustainability&token=YOUR_GNEWS_KEY"
  );

  const data = await response.json();
  res.send(data.articles);
});

module.exports = router;