// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
console.log('-- task1 start --');
function multiple() {
    let res = 1;
    if (arguments.length > 0) {
        for (let args of arguments) {
            if (typeof args !== "number" || isNaN(args)){
                return "Функция работатет с числами и не числом NaN";
            }
            res *= args;
        }
    } else {
        res = 0;
    }

    return res;
}
console.log(multiple(4, 5, 6));
console.log(multiple('asd', 2));
console.log(multiple(1, 3*'a'));
console.log(multiple());
console.log('-- task1 end --');

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
console.log('-- task2 start --');
let str = 'tset';

function reverseString(someStr) {
    return someStr.split('').reverse().join('');
}
console.log(reverseString(str));
console.log(reverseString('neercs ediw'));
console.log('-- task2 end --');


// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
//
//     getCodeStringFromText(‘hello’) // “104 101 108 108 111”
console.log('-- task3 start --');
//БЕЗ ПРИМИНЕНИЯ МАССИВОВ
function getCodeStringFromText(str) {
    let codes = '';
    for (let i = 0; i < str.length; i++) {
        codes += str.charCodeAt(i) + ' ';
    }
    return codes.trim();
}
console.log(getCodeStringFromText('hello'));
// О методе trim прочитал здесь
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

// ЧЕРЕЗ МАССИВЫ
function getCodeStringFromText1(str) {
    let codes = [];
    for (let i = 0; i < str.length; i++) {
        codes.push(str.charCodeAt(i));
    }
    return codes.join(' ');
}
console.log(getCodeStringFromText1('hello'));

console.log('-- task3 end --');

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
console.log('-- task4 start --');

function guessNumber(num) {
    if (typeof num !== "number" || isNaN(num)) {
        console.log('Введите число и не NaN число');
        return 'Введите число и не NaN число';
    }

    let randomNumber = Math.ceil(Math.random()*9) + 1; //если сделать так как вы говорили Math.ceil(Math.random()*10), то есть вероятность получить 0. Так как функция Math.random дает числа [0, 1)
    if (num > 0 && num <= 10) {
        if (randomNumber === num) {
            return 'Вы выиграли';
        } else {
            return `Вы не угадали ваше число ${num} а выпало число ${randomNumber}`;
        }
    } else {
        return "Вы ввели чило не от 0 до 10";
    }
}

console.log(guessNumber(3));
console.log('-- task4 end --');

// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
console.log('-- task5 start --');

function getArray(N) {
    let mas = [];
    for (let i = 1; i <= N; i++) {
        mas.push(i);
    }
    return mas;
}
console.log(getArray(15));

console.log('-- task5 end --');
// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
//     doubleArray([1,2,3]) // [1,2,3,1,2,3]
console.log('-- task6 start --');

function doubleArray(mas) {
    return mas.concat(mas)
}
console.log(doubleArray([1, 2, 3]));

console.log('-- task6 end --');

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
//     changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
console.log('-- task7 start --');

function changeCollection() {
    let mas = [];
    for (let value of arguments) {
        value.shift();
        mas.push(value);
    }
    return mas;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));
console.log(changeCollection([1, 2, 3, 4]));
console.log(changeCollection([1, 2], ['srt', 1234, 'lia-lia'], ['lia', 1234, 1234]));
console.log('-- task7 end --');
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие у казанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
console.log('-- task8 start --');

let mas = [
    {
        name: 'Denis',
        age: 29,
        gender: 'male'
    },
    {
        name: 'Ivan',
        age: 24,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 28,
        gender: 'male'
    },
    {
        name: 'Inna',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Anna',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dodik',
        age: 29,
        gender: 'male'
    }
];

function funcGetUsers(users, key, val) {
    if (arguments.length === 3) {
        let resMas = [];
        for (let value of users) {
            if (value[key] === val) {
                resMas.push(value);
            }
        }
        return resMas;
    } else {
        return 'Функция ожидает 3 пареаметра'
    }
}
console.log(funcGetUsers(mas, 'age', 29));
console.log(funcGetUsers(mas, 'name', 'Anton'));
console.log(funcGetUsers(mas, 'gender', 'male'));

console.log('-- task8 end --');

