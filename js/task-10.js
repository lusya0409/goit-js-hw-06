// Напиши скрипт створення і очищення колекції елементів.

//  Користувач вводить кількість елементів в input і натискає
//  кнопку Створити, після чого рендериться колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр
//   - число.Функція створює стільки < div >, скільки вказано в
//    amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
// попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const refs = {
  divBoxes: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
};
refs.buttonCreateEl.addEventListener('click', onButtonCreateClick);
refs.buttonDestroyEl.addEventListener('click', destroyBoxes);

function onButtonCreateClick(event) {
  const num = Number(refs.inputEl.value);
  const min = Number(refs.inputEl.min);
  const max = Number(refs.inputEl.max);
  // console.log(num, min, max);
  if (num < min || num > max) {
    alert(`Введіть значення між ${min} та ${max}`);
    return;
  }

  createBoxes(num);
}

const createBoxes = amount => {
  let width = 30;
  let height = 30;
  let htmlStr = '';
  for (let i = 0; i < amount; i += 1) {
    const divEl = `<div style="width:${width}px;height:${height}px;background-color:${getRandomHexColor()}"></div>`;
    htmlStr += divEl;
    width += 10;
    height += 10;
  }

  console.log(htmlStr);
  console.log(amount);
  refs.divBoxes.innerHTML = htmlStr;
};
function destroyBoxes(event) {
  refs.divBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
