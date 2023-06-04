// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//   і виводить значення кольору в span.color.
//   Для генерування випадкового кольору
//   використовуй функцію getRandomHexColor.

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};
refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  console.log(changeColor);
  refs.span.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
