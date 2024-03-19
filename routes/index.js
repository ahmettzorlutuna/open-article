const express = require("express");
const router = express.Router();

//Index
router.get("/", async (req, res) => {
  res.render("index");
});

router.get(
  "/secretDebug",
  function (req, res, next) {
    console.log(req.get("Authorization"));
  }
);

module.exports = router;
