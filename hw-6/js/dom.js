// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head

console.log(document.head);
// 2. body
console.log(document.body);

// 3. все дочерние элементы body и вывести их в
// консоль.
console.log(document.body.children);

// 4. первый div и все его дочерние узлы
let firstDiv = document.body.children[0];
console.log(firstDiv);
let res = firstDiv.childNodes;
// а) вывести все дочерние узлы в консоль
console.log(res);
// б) вывести в консоль все дочерние узлы,
//     кроме первого и последнего
for (let i = 1; i < res.length - 1; i++) {
    console.log(res[i]);
}
// Для навигации по DOM использовать методы,
//     которые возвращают только элементы
