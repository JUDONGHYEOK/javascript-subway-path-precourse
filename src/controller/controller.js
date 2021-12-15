import { ID } from '../constant/index.js';
import { stations } from '../data/index.js';
import validateStaions from '../utils/validation.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.addEvents();
  }

  addEvents() {
    document
      .getElementById(ID.SEARCH_BUTTON)
      .addEventListener('click', this.searchPath.bind(this));
  }

  searchPath(event) {
    event.preventDefault();
    const startStation = document.getElementById(ID.START_INPUT).value;
    const endStation = document.getElementById(ID.END_INPUT).value;
    const error = validateStaions(startStation, endStation, stations);
    if (error) {
      this.view.reportError(error);
    }
  }
}
