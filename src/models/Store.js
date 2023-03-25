export default class Store {
  constructor(storage) {
    if (!storage) throw new Error('no storage');

    this.storage = storage;

    this.todos = this.fetchTodos();
    console.log(this.todos);
  }

  fetchTodos() {
    const toTodo = (_, index) =>
      JSON.parse(this.storage.getItem(this.storage.key(index)));

    return Array.from({ length: this.storage.length }).map(toTodo);
  }

  getTodos() {
    return this.todos;
  }

  addOneItem(todo) {
    const todoInfo = { completed: false, item: todo };
    this.storage.setItem(todo, JSON.stringify(todoInfo));
    this.todos.push(todoInfo);
  }

  removeOneItem(todo) {
    this.storage.removeItem(todo);

    const isNotRemovedTodo = (todoInfo) => todoInfo.item !== todo;
    this.todos = this.todos.filter(isNotRemovedTodo);
  }
}
