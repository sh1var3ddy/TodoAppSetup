const TodoService = require("../service/todo.service");
// const TodoMysqlRepository = require("../repositories/todoMysql.repository");
// const todoService = new TodoService(new TodoMysqlRepository());
const TodoRepository = require("../repositories/todo.repository");
const todoService = new TodoService(new TodoRepository());
function getTodos(req, res) {
  const response = todoService.getAllTodos();
  return res.json({ data: response });
}
function createTodo(req, res) {
  const todoText = req.body.todoText;
  todoService.createTodo(todoText);
  return res.json({ msg: "Created todo" });
}
module.exports = {
  getTodos,
  createTodo,
};
