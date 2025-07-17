const todo = require('./todo.js');
let todoList;


beforeEach(() => {
  todoList = new todo();
});


// Cover addTodo()
test('should add a new todo item', () => {

    let result = todoList.addTodo("My First Todo List Item");

    expect(result).toStrictEqual(
    {id: 1,
      title: "My First Todo List Item",
      completed: false,}
    );
});


// Cover removeTodo()
test('should return true if successfully removed a task that matches the id provided', () => {

    todoList.addTodo("My First Todo List Item");

    const result = todoList.removeTodo(1);

    expect(result).toBe(true);
});

test('should return false if failed to remove a task that matches the id provided', () => {

    const result = todoList.removeTodo(1);

    expect(result).toBe(false);
});


// Cover markCompleted()
test('task should have completed : true by id', () => {

    todoList.addTodo("Walk Dog");

    todoList.markCompleted(1);

    const result = todoList.todos;

    expect(result[0].completed).toBe(true);
});


// Cover getCompleted()
test('return only tasks with completed set to true', () => {

    todoList.addTodo("Walk Dog");
    todoList.addTodo("Feed Cat");
    todoList.addTodo("Clean Room");

    todoList.markCompleted(1);
    todoList.markCompleted(3);

    const result = todoList.getCompleted();

    expect(result.length).toBe(2);
});


// Cover getActive()
test('return only tasks with completed set to false', () => {

    todoList.addTodo("Walk Dog");
    todoList.addTodo("Feed Cat");
    todoList.addTodo("Clean Room");

    todoList.markCompleted(1);
    todoList.markCompleted(3);

    const result = todoList.getActive();

    expect(result.length).toBe(1);
});

