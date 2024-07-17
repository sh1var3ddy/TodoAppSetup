const express = require("express");
const homePingController = require("../controllers/home.controllers");

const router = express.Router();

router.get("/custom1", homePingController);
router.get("/custom2", homePingController);
module.exports = router;
