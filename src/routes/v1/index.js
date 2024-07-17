const express = require("express");
const homePingController = require("../../controllers/home.controllers");
const todoRouter = require("./todo.routes");

const router = express.Router();
// function m1(req, res, next) {
//   console.log("ping middleware");
//   next();
// }

router.use("/todos", todoRouter);
router.get("/ping", homePingController);

module.exports = router;
