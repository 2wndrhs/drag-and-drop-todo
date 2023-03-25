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
      this.render();
    });

    this.todoListView.on('@remove', (event) => {
      this.removeTodo(event.detail.value);
      this.render();
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

  removeTodo(todo) {
    this.store.removeOneItem(todo);
  }
}
