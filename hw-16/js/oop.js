// 1. Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
//     Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’


function Planet(name = 'qq') {
    this.name = name;
    this.getName = function() {
        return 'Planet name is' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);
    this.satteliteName = satelliteName;
    this.getName = function() {
        return 'Planet name is ' + this.name + ' The satellite is ' + this.satteliteName;
    }
}

const earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
//     классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name = 'building', stageCount = 1) {
    this.name = name;
    this.stageCount = stageCount;

   this.getStageCount = function() {
        return this.stageCount;
    };
    this.setStageCount = function(stageCount) {
        this.stageCount = stageCount;
        return this.stageCount;
    };
}

const building = new Building();

function House(name, stageCount, countOfApartmentByStage) {
    Building.apply(this, arguments);
    this.countOfApartmentByStage = countOfApartmentByStage;

    this.getStageCountOfHouse = function() {
        return {
            stages: this.stageCount,
            apartments: this.stageCount * this.countOfApartmentByStage
        }
    };
}

let house = new House('New house', 5, 3);

function ShoppingMall(name, stageCount, countOfShoppesByStage) {
    Building.apply(this, arguments);
    this.countOfShoppesByStage = countOfShoppesByStage;

    this.getStageCountOfMall = function() {
        return {
            stages: this.stageCount,
            shops: this.stageCount * this.countOfShoppesByStage
        }
    };
}

let shop = new ShoppingMall('New shopping mall', 3, 3);

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
//     Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = parseFloat(price);
}
Furniture.prototype.getInfo = function() {
    let properties = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)){
            properties.push(`{${key}: ${this[key]}}`);
        }
    }
    return properties;
};

let officeFurniture = new Furniture('For Tower', '10000$');
officeFurniture.shreder = true;


let homeFurniture = new Furniture('For home', '1000$');
homeFurniture.sofa = true;
homeFurniture.shreder = false;

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
//     У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name = 'unknown', registerDate = 1) {
    this.name = name;
    this.registerDate = registerDate;
}

User.prototype.getUserInfo = function() {
    let properties = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)){
            properties.push(`{${key}: ${this[key]}}`);
        }
    }
    return properties;
};

function Admin(name = 'unknown', registerDate = 1, superUser = false) {
    User.apply(this, arguments);
    this._superUser = superUser;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

function Guest(name = 'unknown', registerDate = 1, validity = 30) {
    User.apply(this, arguments);
    this._validity = validity;
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const admin = new Admin('admin', 5, true);
const guest = new Guest('admin', 2, 60);

