// Напиши скрипт, який під час втрати фокусу на інпуті
//     (подія blur), перевіряє його вміст щодо правильної
//      кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається
// в його атрибуті data - length.
// Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо
//     неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputText = event.currentTarget;
  //   console.dir(inputText.value);
  //   console.log(inputText.value.length, inputText.dataset.length);

  if (inputText.value.length === Number(inputText.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
