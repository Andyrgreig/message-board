const express = require("express");
const router = express.Router();

/* GET new message page. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

module.exports = router;
