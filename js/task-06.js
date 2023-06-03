// Напиши скрипт, який під час втрати фокусу на інпуті
//     (подія blur), перевіряє його вміст щодо правильної
//      кількості введених символів.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputText = event.currentTarget;
  //   console.dir(inputText.value);
  //   console.log(inputText.value.length, inputText.dataset.length);
  if (inputText.value.length !== Number(inputText.dataset.length)) {
    inputText.value = '';
  }
}
