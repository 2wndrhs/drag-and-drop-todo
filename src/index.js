import Controller from './controllers/Controller.js';
import Store from './models/Store.js';
import storage from './models/storage.js';

function main() {
  const store = new Store(storage);

  const views = {};

  new Controller(store, views);
}

document.addEventListener('DOMContentLoaded', main);
