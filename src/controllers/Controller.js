export default class Controller {
  constructor(store, { todoFormView }) {
    this.store = store;

    this.todoFormView = todoFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.todoFormView.on('@submit', (event) =>
      this.addTodo(event.detail.value),
    );
  }

  addTodo(todo) {
    this.store.addTodoItem(todo);
  }
}
