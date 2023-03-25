export default class Store {
  constructor(storage) {
    if (!storage) throw new Error('no storage');

    this.storage = storage;

    this.todos = this.fetchTodos();
    this.dragStart = '';
    this.dragDrop = '';
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
    const todoInfo = { item: todo };

    this.todos.push(todoInfo);
    this.storage.setItem(todo, JSON.stringify(todoInfo));
  }

  removeOneItem(todo) {
    const isNotRemovedTodo = (todoInfo) => todoInfo.item !== todo;
    this.todos = this.todos.filter(isNotRemovedTodo);

    this.storage.removeItem(todo);
  }

  setDragStart(dragStart) {
    this.dragStart = dragStart;
  }

  setDragDrop(dragDrop) {
    this.dragDrop = dragDrop;
  }

  updateTodos() {
    this.todos = this.todos.reduce((acc, todo) => {
      const isDragStart = todo.item === this.dragStart;
      const isDragDrop = todo.item === this.dragDrop;

      if (isDragStart) {
        return acc;
      }

      if (isDragDrop) {
        acc.push(todo);
        acc.push({ item: this.dragStart });
        return acc;
      }

      acc.push(todo);
      return acc;
    }, []);
  }
}
