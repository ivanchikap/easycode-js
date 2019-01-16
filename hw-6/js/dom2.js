// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//     isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
//
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark


let isParent = (parent, child) => {
    return parent === child.parentElement
        || parent === child.parentElement.parentElement
        || parent === child.parentElement.parentElement.parentElement
        || parent === child.parentElement.parentElement.parentElement.parentElement;
};

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
let allLinks = document.links;

let resLinks = [];
for (let i = 0; i < allLinks.length; i++) {
    if (!allLinks[i].closest('ul')) {
        resLinks.push(allLinks[i]);
    }
}
console.log(resLinks);

// 3. Найти элемент, который находится перед и после списка ul
let ul = document.getElementsByTagName('ul');

console.log(ul[0].previousElementSibling);
console.log(ul[0].nextElementSibling);

// 4. Посчитать количество элементов li в списке
let count = 0;
for (let i = 0; i < ul[0].children.length; i++) {
    count++;
}
console.log(count);
// 5. В коде с занятия написать функцию по редактированию задачи.
// 6. Подумать и улучшить функцию generateId();
// В файле todo_app.js есть закоментированый участок код, как я пытался это сделать через метод reduce.
// Я начинаю сводить массив с рандомного места, но потом не знаю как учесть это в выборе следующего номера массива
// Если так можно было решить задачу, подскажите пжл как. А то потрачено очень много времени, хотелось бы узнать решение