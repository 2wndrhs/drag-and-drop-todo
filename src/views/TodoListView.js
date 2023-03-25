import { qs, delegate } from '../utils/helpers.js';
import View from './View.js';

const Template = Object.freeze({
  getTodoItems(todos) {
    return `${todos.map(this.getTodoItem).join('')}`;
  },

  getTodoItem(todo) {
    return `
    <li data-draggable="${todo.item}" class="shadow list-view" draggable="true">
      <span>${todo.item}</span>
      <span data-todo="${todo.item}" class="remove-btn">
        <i class="fas fa-times"></i>
      </span>
    </li>`;
  },
});

export default class TodoListView extends View {
  constructor() {
    super(qs('#todo-list-view'));

    this.bindEvents();
  }

  bindEvents() {
    // 이벤트 핸들러의 올바른 this 바인딩을 위해 화살표 함수를 전달
    delegate(this.element, 'click', '.remove-btn', (event) =>
      this.handleClickRemoveButton(event),
    );

    delegate(this.element, 'dragstart', '.list-view', (event) =>
      this.handleDragStart(event),
    );

    delegate(this.element, 'dragover', '.list-view', (event) =>
      this.handleDragOver(event),
    );

    delegate(this.element, 'drop', '.list-view', (event) =>
      this.handleDragDrop(event),
    );
  }

  handleClickRemoveButton(event) {
    const value = event.target.dataset.todo;

    this.emit('@remove', { value });
  }

  handleDragStart(event) {
    const value = event.target.dataset.draggable;

    this.emit('@dragstart', { value });
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDragDrop(event) {
    const value = event.target.dataset.draggable;

    this.emit('@dragdrop', { value });
  }

  show(todos = []) {
    this.element.innerHTML = Template.getTodoItems(todos);

    super.show();
  }
}
