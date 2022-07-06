const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Cashier App Rest API is ready!",
  });
});

module.exports = router;
