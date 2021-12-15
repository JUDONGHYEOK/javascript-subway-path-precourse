export const createInput = (text, inputId) => {
  return `<span>${text}<input id=${inputId}></input></span>`;
};

export function createElement(tag, text, id) {
  const $container = document.createElement(tag);

  if (text) {
    const $textNode = document.createTextNode(text);
    $container.appendChild($textNode);
  }

  if (id) {
    $container.id = id;
  }

  return $container;
}

export function createRadioBox(name, values) {
  let radioBox = '<div>';
  values.forEach((value, index) => {
    if (index === 0) {
      radioBox += `<input type="radio" name=${name} value = ${value} checked><label for=${value}>${value}</lable>`;
    }
    if (index !== 0) {
      radioBox += `<input type="radio" name=${name} value = ${value}><label for=${value}>${value}</lable>`;
    }
  });
  radioBox += '</div>';
  return radioBox;
}

export function createButton(text, id) {
  return `<button id=${id} type = "submit">${text}</button>`;
}
