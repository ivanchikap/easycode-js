// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
//
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }
//
// Пример вызова:const comp = new Component('span');

class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}
const comp = new Component('span');
console.log(comp);
// 2. Реализовать конструктор и методы в ES6 синтаксисе:
//
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }
//
// Component.prototype.setText = function (text) {
//     this.node.textContent = text;
// };

class Component1 {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
    }
}
const comp1 = new Component1();
comp1.setText('Tru-la-la');
console.log(comp1);

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calc {
    constructor(startValue = 0) {
        this.value = startValue;
    }
    get currentValue() {
        return 'currentValue is ' + this.value;
    }
    set currentValue(value) {
        this.value = value;
    }
    plus(number) {
        return this.value += number;
    }
    minus(number) {
        return this.value -= number;
    }
    multiple(number) {
        return this.value *= number;
    }
    divide(number) {
        return this.value /= number;
    }
}

let calculation = new Calc(1);
calculation.plus(2);
calculation.minus(1);
calculation.multiple(12);
calculation.divide(4);

