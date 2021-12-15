import { ID } from './constant/index.js';
import App from './view/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById(ID.APP);
  const view = new App(app);
});
