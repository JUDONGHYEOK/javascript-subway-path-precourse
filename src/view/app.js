import { TEXT } from '../constant/index.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.init();
  }

  init() {
    this.$target.innerHTML += `<h1>${TEXT.TITLE}</h1>`;
  }
}
