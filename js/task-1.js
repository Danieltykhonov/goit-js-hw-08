'use strict';

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.

// Для кожного елемента li.item у списку ul#categories
//  знайде й виведе в консоль текст заголовка елемента (тегу <h2>) 
// і кількість елементів у категорії (усіх <li>, вкладених у нього).


// Вимоги

// Кількість категорій, їх назва та кількість елементів 
// отримані за допомогою властивостей і методів DOM-елементів.

// Дані за кожною категорією отримані й виведені в консоль
//  у тілі циклу або методу forEach().
// У консолі має бути виведено таке повідомлення:

const cards = document.querySelectorAll("li.item");
const numberCategories = cards.length;

console.log(`Number of categories: ${numberCategories}`);

cards.forEach((card) => {
  const title = card.querySelector("h2");
  const items = card.querySelectorAll("li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
  
});










