const express = require("express");
const router = express.Router();
const messages = require("../public/messages");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.post("/new", function (req, res) {
  messages.push({
    messageTitle: req.body.messageTitle,
    messageBody: req.body.messageBody,
    username: req.body.username,
    added: getDateAdded(),
  });
  res.redirect("/");
});

function getDateAdded() {
  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();
  const day = date.getDate();
  const yr = date.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];

  return `${hour}:${mins}, ${day} ${month} ${yr}`;
}

module.exports = router;
