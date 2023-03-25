import { qs, on } from '../utils/helpers.js';
import View from './View.js';

export default class TodoFormView extends View {
  constructor() {
    super(qs('#todo-form-view'));

    this.inputElement = qs('[type=text]', this.element);
    this.btnElement = qs('.add-container', this.element);

    this.bindEvents();
  }

  bindEvents() {
    on(this.inputElement, 'keyup', (event) => this.handleKeyup(event));
    on(this.btnElement, 'click', () => this.handleClick());
  }

  handleKeyup(event) {
    const enter = 13;
    const { value } = this.inputElement;

    if (event.keyCode !== enter) return;

    this.emit('@submit', { value });
  }

  handleClick() {
    const { value } = this.inputElement;

    this.emit('@submit', { value });
  }
}
