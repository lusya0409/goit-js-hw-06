// Напиши скрипт, який реагує на зміну значення
//  input#font - size - control(подія input) і змінює інлайн
//     - стиль span#text, оновлюючи властивість font - size.
//     В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};
refs.input.addEventListener('input', onInputValue);

function onInputValue(event) {
  const changeFontSize = event.currentTarget;

  //   console.log(changeFontSize.value);
  refs.span.style.fontSize = changeFontSize.value + 'px';
}
