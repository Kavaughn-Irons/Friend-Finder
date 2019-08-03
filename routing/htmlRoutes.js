const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Html/Home.html"));
});

router.get("/make-profile", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Html/Survey.html"));
});

router.get("/profile-page", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Html/Profile-Page.html"));
});

router.get("/home.js", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Javascript/Home.js"));
});

router.get("/make-profile-javascript", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Javascript/Survey.js"));
});

router.get("/profile-page.js", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/Html/Profile-Page.html"));
});

router.get("/database", function(req, res) {
  res.sendFile(path.join(__dirname, "../app/data/friends.json"));
});

module.exports = router;
