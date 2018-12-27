// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable = "hidden";
if (variable === "hidden") {
    variable = "visible";
} else {
    variable = "hidden";
}
console.log(variable);

// 2. Используя if, записать условие:
//    a. если переменная равна нулю, присвоить ей 1;
//    b. если меньше нуля - строку “less then zero”;
//    c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let variable1 = 3;
if (variable1 === 0) {
    variable1 = 1;
} else if (variable1 < 0) {
    variable1 = 'less then zero';
} else if (variable1 > 0) {
    variable1 *= 10;
} else {
    console.log('нештатная ситуация, требуется проверить логику кода');
}
console.log(variable1);


// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и
//     свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}
console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//     Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: ''
};

if (item.discount) {
    item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount) / 100;
    console.log('item.priceWithDiscount' ,item.priceWithDiscount);
} else if (item.discount === undefined) { // я бы не сказал, что иначе и поля discount нет, это одно и то же. Проверка в этой строке на отсутсвеи поля
    console.log(item.price);
} else {
    console.log(item.price);
    console.log('Что-то другое');
}

// 6. Дан следующий код:
//
//     let product = {
//         name: “Яблоко”,
// price: “10$”
// };
//
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
//
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: "Яблоко",
    price: "10$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}
