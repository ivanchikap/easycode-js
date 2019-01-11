// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

function createStr(mas, callback) {
    let changedStr = 'New value: ';
    for (let elem of mas) {
        changedStr += callback(elem) + ', ';
    }
    return changedStr.trim();
}

function capitalizeItems(item) {
    let newString = item[0].toUpperCase();

    for (let i = 1; i < item.length; i++) {
        newString += item[i];
    }

    return newString;
}
console.log(createStr(['my', 'name', 'is', 'Trinity'], capitalizeItems));

function multipleItems(item) {
    return item*10;
}
console.log(createStr([10, 20, 30], multipleItems));

function swapObjectValueToStr(item) {
    return `${item.name} is ${item.age}`;
}
console.log(createStr([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}],  swapObjectValueToStr));

function reverseItemValues(item) {
    return item.split('').reverse().join('');
}
console.log(createStr(['abc', '123'], reverseItemValues));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

function every(mas, callback) {
    if (typeof mas === 'object') {
        let res = 0;
        for (let item of mas) {
            res += callback(item);
        }
        return res === mas.length;
    } else {
        return 'object expected'
    }
}
function check(elem) {
    return elem > 5;
}
console.log(every([6, 7, 9, 2], check));
console.log(every([7, 8, 24], check));