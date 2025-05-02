function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});
