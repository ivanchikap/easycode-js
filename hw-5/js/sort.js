// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
let masOfMas = [[14, 45],  [1],  ['a', 'c', 'd'] ];
masOfMas.sort(function (prev, next) {
    return prev.length - next.length;
});
console.log(masOfMas);

// 2. Есть массив объектов:
//     [
//         {cpu: 'intel', info: {cores:2, cache: 3}},
//         {cpu: 'intel', info: {cores:4, cache: 4}},
//         {cpu: 'amd', info: {cores:1, cache: 1}},
//         {cpu: 'intel', info: {cores:3, cache: 2}},
//         {cpu: 'amd', info: {cores:4, cache: 2}}
//     ]
//
// Отсортировать их по возрастающему количеству ядер (cores).

let masOfObjects = [
    {cpu: 'intel', info: {cores:2, cache: 3}},
    {cpu: 'intel', info: {cores:4, cache: 4}},
    {cpu: 'amd', info: {cores:1, cache: 1}},
    {cpu: 'intel', info: {cores:3, cache: 2}},
    {cpu: 'amd', info: {cores:4, cache: 2}}
];

masOfObjects.sort(function (prev, next) {
   return prev.info.cores - next.info.cores;
});
console.log(masOfObjects);