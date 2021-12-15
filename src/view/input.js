import { ID, NAME, TEXT } from '../constant/index.js';
import {
  createButton,
  createElement,
  createInput,
  createRadioBox
} from '../utils/dom-utils.js';

export default class Input {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$container = createElement('div');
    this.$inputContainer = createElement('form');
    this.$startInput = createInput(TEXT.START_INPUT_TITLE, ID.START_INPUT);
    this.$endInput = createInput(TEXT.END_INPUT_TITLE, ID.END_INPUT);
    this.$radioBox = createRadioBox(NAME.RADIO_OPTION, [
      TEXT.TYPE_DISTANCE,
      TEXT.TYPE_TIME
    ]);
    this.$submitButton = createButton(TEXT.SEARCH_BUTTON, ID.SEARCH_BUTTON);
  }

  appendChildren() {
    this.$inputContainer.innerHTML += this.$startInput;
    this.$inputContainer.innerHTML += `<br/>`;
    this.$inputContainer.innerHTML += this.$endInput;
    this.$inputContainer.innerHTML += this.$radioBox;
    this.$inputContainer.innerHTML += this.$submitButton;
    this.$container.appendChild(this.$inputContainer);
  }

  get component() {
    return this.$container;
  }
}
