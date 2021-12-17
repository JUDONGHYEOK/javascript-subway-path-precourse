import { TEXT } from '../constant/index.js';
import { createElement, createPathTr, createTr } from '../utils/dom-utils.js';

export default class Result {
  constructor() {
    this.init();
  }

  init() {
    this.$container = createElement('div');
    this.$container.innerHTML += `<h1>${TEXT.RESULT_TITLE}</h1>`;
    this.$tableContainer = createElement('div');
    this.$container.append(this.$tableContainer);
  }

  buildTable() {
    this.$table = createElement('table');
    this.$table.innerHTML += createTr(
      TEXT.TABLE_TOTAL_DISTANCE,
      TEXT.TABLE_TOTAL_TIME
    );
  }

  render(type, distance, time, path) {
    this.result = `<h2>${type}</h2>`;
    this.buildTable();
    this.$table.innerHTML += createTr(distance, time);
    this.$table.innerHTML += createPathTr(path);
    this.$tableContainer.innerHTML = this.result;
    this.$tableContainer.appendChild(this.$table);
  }

  get component() {
    return this.$container;
  }
}
