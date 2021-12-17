import { TEXT } from '../constant/index.js';
import { createElement } from '../utils/dom-utils.js';
import Input from './input.js';
import Result from './result.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.create();
    this.init();
    this.appendChildren();
  }

  create() {
    this.inputContainer = new Input();
    this.$resultContainer = new Result();
  }

  init() {
    this.$target.innerHTML += `<h1>${TEXT.TITLE}</h1>`;
    this.$emptyContainer = createElement('div');
  }

  appendChildren() {
    this.$target.appendChild(this.inputContainer.component);
    this.$target.appendChild(this.$emptyContainer);
  }

  reportError(error) {
    alert(error);
  }

  renderResult(type, distance, time, path) {
    this.$resultContainer.render(type, distance, time, path);
    this.$target.replaceChild(
      this.$resultContainer.component,
      this.$target.lastElementChild
    );
  }
}
