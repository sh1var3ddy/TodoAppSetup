const express = require("express");
const homePingController = require("../../controllers/home.controllers");

const router = express.Router();

router.get("/ping", homePingController);

module.exports = router;
