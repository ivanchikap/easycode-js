// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.
//
//      function promiseCreator(...) {...}
//      const prom = promiseCreator(500, 'Ok!');
//      prom.then(console.log);
//      // Ok!

function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(value);
           reject(value, '11');
       }, time)
    });
}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);


// 2. Создать класс, который производит экземпляр со следующими свойствами:
//       - promise - промис, который создается во время запуска конструктора;
//       - reject - метод, при выполнении которого promise реджектится;
//       - resolve - метод, при выполнении которого promise резолвится.
//
//     class Prom {...}
//      const inst = new Prom();
//       inst.promise.then(data => console.log(data));
//       inst.resolve('test');
//       →  test


// class Prom {
//     constructor() {
//         this.promise = new Promise((resolve, reject) => {
//             success(() => {
//                 resolve('success message');
//             });
//             error(() => {
//                 reject('error message');
//             });
//         });
//     }
//     resolve() {
//         this.promise.success();
//     }
//     reject(){
//         this.promise.error();
//     }
// }
// const inst = new Prom();
//
// inst.promise.then(data => console.log(data));
// inst.resolve('test');
// console.log(inst.resolve('test'));

let startResolve;
let startReject;
class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            startResolve = resolve;
            startReject = reject;
        });
    }
    resolve() {
        startResolve();
    }
    reject(){
        startReject();
    }
}
const inst = new Prom();

inst.promise.then(data => console.log(data));
inst.resolve('test');
console.log(inst.resolve('test'));
