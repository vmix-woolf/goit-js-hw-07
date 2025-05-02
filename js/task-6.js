function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputEl = document.querySelector('#controls input');

const destroyBoxes = () => {
  const outputPlace = document.querySelector('#boxes');
  outputPlace.innerHTML = '';
}

const clearInput = () => {
  inputEl.value = '';
}

const createBoxes = () => {
  if (inputEl.value < 1 || inputEl.value > 100 || inputEl.value === '') {
    // TODO: it is desirable that a message is displayed to the user and the input is cleared (it's off-task)
    return;
  }

  destroyBoxes();

  const step = 10;
  let size = 30;

  const fragment = document.createDocumentFragment();

  for (let i= 0; i < inputEl.value; i++) {
    const color = getRandomHexColor();
    const colorDiv = document.createElement('div');
    colorDiv.style.width = `${size}px`;
    colorDiv.style.height = `${size}px`;
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;

    fragment.appendChild(colorDiv);
    size += step;
  }

  const outputPlace = document.querySelector('#boxes');
  outputPlace.appendChild(fragment);

  clearInput();
}

const createBtn =  document.querySelector('[data-create]');
createBtn.addEventListener('click', createBoxes);

const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);
