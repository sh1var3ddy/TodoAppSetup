function createTodoValidator(req, res, next) {
  if (!req.body.todoText) {
    return res.json({ msg: "Invalid text" });
  }
  next();
}
module.exports = { createTodoValidator };
