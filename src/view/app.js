import { TEXT } from '../constant/index.js';
import Input from './input.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.create();
    this.init();
    this.appendChildren();
  }

  create() {
    this.inputContainer = new Input();
  }

  init() {
    this.$target.innerHTML += `<h1>${TEXT.TITLE}</h1>`;
  }

  appendChildren() {
    this.$target.appendChild(this.inputContainer.component);
  }

  reportError(error) {
    alert(error);
  }
}
