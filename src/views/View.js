import { on, emit } from '../utils/helpers.js';

export default class View {
  constructor(element) {
    if (!element) throw new Error('no element');

    this.element = element;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
