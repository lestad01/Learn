
"use strict";

let str = "some";
let strJbj = String(str);

// console.log(typeof(str));
// console.log(typeof(strJbj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

//john.__proto__ = soldier;

// 1 команда object.create
// Object.setPrototypeOf(john, soldier); //данная запись идентивчна записи выше
// john.sayHello();

// 2  команда object.getptorotypeoff


john.sayHello();