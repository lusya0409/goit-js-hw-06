// Лічильник складається зі спану і кнопок, які по кліку
//  повинні збільшувати і зменшувати його значення на одиницю.

//  1/Створи змінну counterValue, в якій буде зберігатися поточне
//  значення лічильника та ініціалізуй її значенням 0.

// 2/Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.

// 3/Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action ="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
  valueEl.textContent = `${(counterValue -= 1)}`;
  console.log(event.currentTarget);
}
function onIncrementBtnClick(event) {
  valueEl.textContent = `${(counterValue += 1)}`;
  console.log(event.currentTarget);
}
