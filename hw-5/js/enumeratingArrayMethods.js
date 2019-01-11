// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//     каждый элемент которого будет хранить информацию о числе и его четности:
//     [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
let arr = [1, 2, 3, 5, 8, 9, 10];

let newArr = arr.map(function (item) {
    let oddVar = item % 2 === 0;

    return {
       digit: item,
       odd: oddVar
    }
});
console.log(newArr);

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false

let array = [12, 4, 50, 1, 0, 18, 40];

let res = array.every(function(item) {
    return item !== 0;
});
console.log(res);

// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

let words = ['yes', 'hello', 'no', 'easycode', 'what'];

let resWords = words.some(function(word){
    return word.length > 3;
});
console.log(resWords);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
//
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//     {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//     {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
//
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
//
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки
let mas = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
     {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

mas.sort(function (prev, next) {
   return prev.index - next.index;
});
console.log(mas);

let strRes = mas.reduce(function(prev, current) {
    return prev += current.char;
}, '');
console.log(strRes);


