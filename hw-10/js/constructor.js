// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!
function Car(mark = '', age = 0) {
    this.mark = mark || 'unknown';
    this.age = age;
    this.getMark = function() {
        let Mark = this.mark[0] + this.mark.slice(1);
        console.log(Mark);
        return Mark;
    };
    this.getCarProductionYear = function() {
        let date = new Date;
        let birthdayYear = date.getFullYear() - age;
        console.log(birthdayYear);
        return birthdayYear;
    };
}

let lexus = new Car('lexus', 5);
lexus.getMark();
lexus.getCarProductionYear();

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
//      a. показать оригинальную строку
//      b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function EncodeStr(str = ' ') {
    let string = str;
    this.getOriginalString = function() {
        console.log(string);
        return string;
    };
    this.getEncodedStr = function() {
        let encodedStr = string.split('').reverse().join('');
        console.log(encodedStr);
        return encodedStr;
    }
}

let encodedStr = new EncodeStr('I am an EasyCode student!!!');
encodedStr.getOriginalString();
encodedStr.getEncodedStr();