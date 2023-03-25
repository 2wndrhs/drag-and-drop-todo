import Controller from './controllers/Controller.js';
import Store from './models/Store.js';
import TodoFormView from './views/TodoFormView.js';

function main() {
  // 로컬 스토리지 주입
  const store = new Store(localStorage);

  const views = {
    todoFormView: new TodoFormView(),
  };

  new Controller(store, views);
}

document.addEventListener('DOMContentLoaded', main);
