let string = 'some test string';

console.log('--- String. Task. START ---');

// 1. Получить первую и последнюю буквы строки

let firstChar = string[0];
console.log('firstChar = ' ,firstChar);

let lastChar = string[string.length-1];
console.log('lastChar = ', lastChar);

// 2. Сделать первую и последнюю буквы в верхнем регистре
let newString = string[0].toUpperCase() + string.slice(1, -1) + string[string.length-1].toUpperCase();
console.log(newString);

// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'));

// 4. Найти положение второго пробела (“вручную” ничего не считать)
let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(secondSpace);

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(4, 4));

// 6. Получить строку с 5-го по 9-й символы
console.log(string.substring(4, 8));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов(то есть исходная строка без последних 6и символов)
console.log(string.slice(0, -6));

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
//или
// let a = '20', b='16';
// string = a + b;
string = a.toString() + b.toString();
console.log(string);
console.log(`${a}${b}`);

console.log('--- String. Task. END ---');