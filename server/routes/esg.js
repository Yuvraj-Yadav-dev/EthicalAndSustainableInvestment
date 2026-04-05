const express = require("express");
const router = express.Router();

router.get("/:symbol", async (req, res) => {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/esg?symbol=${req.params.symbol}&token=d7932vhr01qp0fl710q0d7932vhr01qp0fl710qg`
    );

    const data = await response.json();

    // 🔥 If API blocked → fallback data
    if (data.error) {
      return res.send({
        totalEsg: Math.floor(Math.random() * 100),
        environmentScore: Math.floor(Math.random() * 100),
        socialScore: Math.floor(Math.random() * 100),
        governanceScore: Math.floor(Math.random() * 100),
        note: "Demo ESG data (API limited)"
      });
    }

    res.send(data);

  } catch (err) {
    res.send({
      totalEsg: Math.floor(Math.random() * 100),
      environmentScore: Math.floor(Math.random() * 100),
      socialScore: Math.floor(Math.random() * 100),
      governanceScore: Math.floor(Math.random() * 100),
      note: "Fallback ESG data"
    });
  }
});

module.exports = router;