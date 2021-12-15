import { ID } from './constant/index.js';
import Controller from './controller/controller.js';
import Path from './model/path.js';
import App from './view/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById(ID.APP);
  const view = new App(app);
  const model = new Path();
  const controller = new Controller(model, view);
});
