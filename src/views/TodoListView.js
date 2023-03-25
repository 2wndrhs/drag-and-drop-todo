import { qs } from '../utils/helpers.js';
import View from './View.js';

const Template = Object.freeze({
  getTodoList(todos = []) {
    return `
          <ul class="result">
              ${todos.map(this.getTodoItem).join('')}
          </ul>
      `;
  },

  getTodoItem(todo) {
    return `
        <li data-todo="${todo}">
         ${todo}
        </li>
      `;
  },

  getEmptyMessage() {
    return `
      <div class="empty-box">
        Todo가 없습니다
      </div>
    `;
  },
});

export default class TodoListView extends View {
  constructor() {
    super(qs('#todo-list-view'));
  }

  show(todos = []) {
    this.element.innerHTML =
      todos.length > 0
        ? Template.getTodoList(todos)
        : Template.getEmptyMessage();

    super.show();
  }
}
