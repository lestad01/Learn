"use strict";

// to string

// 1)
console.log(typeof(String(null)));

console.log(typeof(String(228)));

// 2)
console.log(typeof((undefined + '')));

const num = 25;
console.log("https://vk.com/catalog/" + `${num}`);

const fontSize = 26 +'px';
console.log(fontSize);

//to number

//1)
console.log(typeof(Number('228')));

// 2)
console.log(typeof(+'228'));

// 3)
console.log(typeof(parseInt('228', 10)));

let answ = +prompt("hello,im winner!");

// to boolean

// 0, '', null, undefined, NaN; - false
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(!!"2311"));

// 3)
