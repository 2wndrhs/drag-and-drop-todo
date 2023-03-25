import { qs } from '../utils/helpers.js';
import View from './View.js';

const Template = Object.freeze({
  getTodoItems(todos) {
    return `${todos.map(this.getTodoItem).join('')}`;
  },

  getTodoItem(todo) {
    return `
    <li class="shadow">
      <span>${todo.item}</span>
      <span class="remove-btn">
        <i class="fas fa-times"></i>
      </span>
    </li>`;
  },
});

export default class TodoListView extends View {
  constructor() {
    super(qs('#todo-list-view'));
  }

  show(todos = []) {
    this.element.innerHTML = Template.getTodoItems(todos);

    super.show();
  }
}
