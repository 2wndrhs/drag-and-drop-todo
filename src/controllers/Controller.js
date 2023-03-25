export default class Controller {
  constructor(store, { todoFormView, todoListView }) {
    this.store = store;

    this.todoFormView = todoFormView;
    this.todoListView = todoListView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.todoFormView.on('@submit', (event) => {
      this.clearTodoInputForm();
      this.addTodo(event.detail.value);
    });
  }

  render() {
    const todos = this.store.getTodos();

    this.todoListView.show(todos);
  }

  clearTodoInputForm() {
    this.todoFormView.inputElement.value = '';
  }

  addTodo(todo) {
    this.store.addOneItem(todo);
  }
}
