// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
//     const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 100,
    height: 29,
    getSquare: function() {
        return this.width * this.height;
    }
};
console.log(rectangle.getSquare());

// 2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
//     const price = {
//         price: 10,
//         discount: '15%',
//         ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        return this.price * (1 - parseInt(this.discount)/100);
    }
};
console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
//     object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

let object = {
    height: 10,
    increaseHeight: function() {
        return this.height += 1;
    }
};
console.log(object.increaseHeight());

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
//     const numerator = {
//         value: 1,
//         double: function () {...},
//         plusOne: function () {...},
//         minusOne: function () {...},
//     }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function() {
        this.value *= 2;
        return this;
    },
    plusOne: function() {
        this.value++;
        return this;
    },
    minusOne: function() {
        this.value--;
        return this;
    },
};
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value); // 3

// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const apple = {
    price: 5,
    count: 20,
    cost: function() {
        return this.price * this.count;
    }
};

// 6. Создать объект из предыдущей задачи. Создать второй объект,
//     который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const details = {
    count: 10,
    price: 50
};
console.log(apple.cost.call(details));

// 7. Даны объект и функция:
//     let sizes = {width: 5, height: 10},
//         getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {
    width: 5,
    height: 10
};
let getSquare = function() {
    return this.width * this.height;
};
console.log(getSquare.call(sizes));

// 8.
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };
//
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
//
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
console.log(getElementHeight());


