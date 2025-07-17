// todo.js

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(title) {
    const todo = {
      id: this.nextId++,
      title,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }

  markCompleted(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) return false;
    todo.completed = true;
    return true;
  }

  getCompleted() {
    return this.todos.filter((t) => t.completed);
  }

  getActive() {
    return this.todos.filter((t) => !t.completed);
  }
}

module.exports = TodoList;
