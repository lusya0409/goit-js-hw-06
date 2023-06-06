// Напиши скрипт, який під час набору тексту в інпуті
//  input#name - input(подія input), підставляє його поточне значення
//  в span#name - output.Якщо інпут порожній, у спані повинен
//   відображатися рядок "Anonymous".
const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputValue);

const defaultValue = refs.span.textContent;

function onInputValue(event) {
  if (!event.currentTarget.value) {
    refs.span.textContent = defaultValue;
    return;
  }
  refs.span.textContent = event.currentTarget.value;
  //   console.dir(event.currentTarget.value);
}
