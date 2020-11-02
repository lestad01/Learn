
"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 120,
    sayHello: function() {
        console.log("Hello, Broucher");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// // console.log(john.armor);

john.sayHello();

let proto = {
    eats:false
};
let obj = Object.create(proto);
console.log(obj.eats);
console.log(Object.getPrototypeOf(obj) === proto);
Object.setPrototypeOf(obj, {});



