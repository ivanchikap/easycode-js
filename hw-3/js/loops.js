// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode';
let newStr = '';
let k = -1;
for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
        k = i; //запомнили где был пробел, следующий номер делать tuUpperCase()
    }

    if (i === k + 1) {
        newStr += str[i].toUpperCase();
    } else  {
        newStr += str[i];
    }
}
newStr = str[0].toUpperCase() + newStr;
console.log(newStr);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let str2 = 'tseb eht ma i';
let newStr2 = ' ';
for (let i = str2.length-1; i+1 > 0; i--) {
    newStr2 += str2[i];
}
console.log(newStr2);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for of.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 1;
for (let value of array) {
    result *= value;
}
console.log(result);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str4 = 'javaScript is a pretty good language';
let newStr4 = '';
let k4 = -1;
for (let i = 0; i < str4.length; i++) {
    if (str4[i] === ' ') {
        k4 = i; //запомнили где был пробел, следующий номер делать tuUpperCase()
        continue;
    }

    if (i === k4 + 1) {
        newStr4 += str4[i].toUpperCase();
    } else  {
        newStr4 += str4[i];
    }
}

console.log(newStr4);


// 5. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль. Использовать for of.
let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of mas) {
    if (value%2 !== 0) {
        console.log(value);
    }
}

//     6. Дан объект:
//     let list = {
//         name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
//
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
    if (typeof(list[key]) === 'string'){
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);