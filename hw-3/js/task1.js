// 1. Записать в виде switch case следующее условие:
//     if (a === ‘block’) {
// 	        console.log(‘block’);
//      } else if (a === ‘none’) {
//  	    console.log(‘none’);
//      } else if (a === ‘inline’) {
//          console.log(‘inline’);
//      } else {
//          console.log(‘other’);
//      }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = 'inline';

switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}

// 2.Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
// 2.1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable = 'hidden';

variable === 'hidden' ? variable = 'visible' : variable = 'hidden';
console.log(variable);

// 2.2. Используя if, записать условие:
//      если переменная равна нулю, присвоить ей 1;
//      если меньше нуля - строку “less then zero”;
//      если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let n = 3;

n === 0 ? n = 1 : n < 0 ? n = 'less then zero' : n *= 10;

console.log(n);

// 2.3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
// первый вариант если так как в условии (прочитал об этом методе тут https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80)
car.age > 5 ? (
    console.log('Need Repair'),
    car.needRepair = true
    ) : (
        car.needRepair = false
);


// или второй вариант, без вывода сообщения
// car.needRepair = (car.age > 5) ? true : false;

// или третий вариант, без вывода сообщения

// car.age > 5 ? car.needRepair = true : car.needRepair = false;

console.log(car);