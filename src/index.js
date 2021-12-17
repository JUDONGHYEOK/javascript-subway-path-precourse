import { ID } from './constant/index.js';
import Controller from './controller/controller.js';
import Subway from './model/subway.js';
import App from './view/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById(ID.APP);
  const view = new App(app);
  const model = new Subway();
  const controller = new Controller(model, view);
});
