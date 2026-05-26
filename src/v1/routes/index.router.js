const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/users", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
    metadata: [
      {
        name: "Messi",
        age: 37,
        country: "Argentina",
      },
      {
        name: "Ronaldo",
        age: 40,
        country: "Portugal",
      },
      {
        name: "Neymar",
        age: 32,
        country: "Brazil",
      },
    ],
  });
});

module.exports = router;
