import { qs } from '../utils/helpers.js';
import View from './View.js';

export default class TodoFormView extends View {
  constructor() {
    super(qs('#todo-form-view'));

    this.inputElement = qs('[type=text]', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.on('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.inputElement;

    this.emit('@submit', { value });
  }
}
