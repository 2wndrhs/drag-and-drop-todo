export default class Controller {
  constructor(store, { todoFormView }) {
    this.store = store;

    this.todoFormView = todoFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.todoFormView.on('@submit', (event) => {
      this.clearTodoInputForm();
      this.addTodo(event.detail.value);
    });
  }

  clearTodoInputForm() {
    this.todoFormView.inputElement.value = '';
  }

  addTodo(todo) {
    this.store.addTodoItem(todo);
  }
}
