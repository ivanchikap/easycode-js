console.log('--- Number. Task. START ---');

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(+(Math.PI).toFixed(2), 'this method is not correct, because toFixed() method can round incorrectly');
console.log(Math.round((Math.PI*100))/100 , 'correct method');

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

let random = Math.random();
console.log(random, random.toFixed(2), 'this method is not correct, because toFixed() method can round incorrectly');
console.log(random, Math.round(random*100)/100, 'correct method');

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let X = 6;
console.log(Math.round(Math.random() * X), 'Рандомное число от 0 до X');

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

console.log(+(0.6 + 0.7).toFixed(10));

// 5. Получить число из строки ‘100$’
console.log(parseInt('100$'));

console.log('--- Number. Task. START ---');