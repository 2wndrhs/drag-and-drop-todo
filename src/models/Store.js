export default class Store {
  constructor(storage) {
    if (!storage) throw new Error('no storage');

    this.storage = storage;

    this.todoItems = this.fetchTodoItems();
    console.log(this.todoItems);
  }

  fetchTodoItems() {
    const toTodoItem = (_, index) =>
      this.storage.getItem(this.storage.key(index));

    return Array.from({ length: this.storage.length }).map(toTodoItem);
  }

  addTodoItem(todo) {
    this.storage.setItem(todo, todo);
    console.log(todo);
  }
}
