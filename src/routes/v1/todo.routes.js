const express = require("express");

const todoRouter = express.Router();
const { getTodos, createTodo } = require("../../controllers/todo.controller");
const { createTodoValidator } = require("../../validators/todo.validator");
// function m1(req, res, next) {
//   console.log("middleware for gettodos");
//   next();
// }
todoRouter.get("/", getTodos);
todoRouter.post("/", createTodoValidator, createTodo);
module.exports = todoRouter;
