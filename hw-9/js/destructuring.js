// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:func(‘a’, ‘b’, ‘c’, ‘d’) → {  first: ‘a’,  other: [‘b’, ‘c’, ‘d’]}

console.log('-----destructuring-----');

function destruct(...rest) {

    let [first, ...other] = rest;

    return {first, other};
}
console.log(destruct('a', 'b', 'c', 'd'));

// О методе spread прочитал тут: https://learn.javascript.ru/destructuring
// без этого метода не придумал как нормально решить задачу

// 2. Организовать функцию getInfo, которая принимает объект вида{ name: ...,  info: { employees: [...], partners: [ … ]  } } и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
//     const organisation = {
//     name: 'Google',
//     info: { employees: [‘Vlad’, ‘Olga’],
//     partners: ['Microsoft', 'Facebook', 'Xing']   }
//     };
// getInfo(organisation); → Name: Google Partners: Microsoft Facebook

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

function printInfo(organization) {
    let {name = 'Unknown', info: {partners: [name1, name2]}} = organization;
    console.log('Name: ', name, 'Partners: ', name1, name2);
}
printInfo(organisation);

