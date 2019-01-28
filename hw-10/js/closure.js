// 1. Создайте функцию которая бы умела делать:
//     minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(x = 0) {
    return function(y = 0) {
        return x - y;
    }
}
console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // -6
console.log(minus()()); // 0

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
//     function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function MultiplyMaker(x = 0) {
    let val = x;
    return function(y) {
        val *= y;
        return val;
    }
}
const multiply = MultiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

// 3. Реализовать модуль, который работает со строкой и имеет методы:
//     a. установить строку
//          i. если передано пустое значение, то установить пустую строку
//          ii. если передано число, число привести к строке
//      b. получить строку
//      c. получить длину строки
//      d. получить строку-перевертыш
//  Пример:
//      модуль.установитьСтроку(‘abcde’);
//      модуль.получитьСтроку(); // ‘abcde’
//      модуль.получитьДлину(); // 5

const mod = (function() {
    let string = '';

    function setStr(str = '') {
        if (typeof str === 'number') {
            str = str.toString();
        }
        string = str;
        return string;
    }

    function getStr() {
        return string;
    }

    function getStrLength() {
        return string.length;
    }
    function getReverseString() {
        return string.split('').reverse().join('');
    }

    return {
        setStr: setStr,
        getStr: getStr,
        getStrLength: getStrLength,
        getReverseString: getReverseString
    };
})();
console.log(mod.setStr('abcde'));
console.log(mod.getStr());
console.log(mod.getStrLength());
console.log(mod.getReverseString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10модуль.прибавить(5); // значение += 5модуль.умножить(2); // значение *= 2модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
//
// Также можно вызывать методы цепочкой:модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

let calc = (function() {
    let variable = 0;
    function setVariable(value) {
        variable = value;
        return this;
    }
    function plus(value = 0) {
        variable += value;
        return this;
    }
    function multiple(value = 0) {
        variable *= value;
        return this;
    }
    function minus(value = 0) {
        variable -= value;
        return this;
    }
    function pow(value = 1) {
        variable = Math.pow(variable, value);
        return this;
    }
    function getVariable() {
        variable = variable.toFixed(2);
        console.log(variable);
        return this;
    }
    return {
        setVariable: setVariable,
        plus: plus,
        minus: minus,
        multiple: multiple,
        pow: pow,
        getVariable: getVariable
    };
})();

calc.setVariable(10);
calc.plus(5);
calc.multiple(2);
calc.pow(2);
calc.getVariable();

calc.setVariable(10).plus(5).minus(3).pow(2).getVariable();