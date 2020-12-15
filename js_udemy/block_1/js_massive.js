"use strict";

const arr = [2, 13, 5, 7, 10];
arr.sort();
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));



const qur = [2, 4, 8, 12];

// console.log(qur.length);
// qur.forEach( function (item, s, qur ) {
//     console.log(`${s}: ${item} внутри массива ${qur}`);
// });

// qur.pop();
// console.log(qur);
// qur.push(22);
// console.log(qur);

// for (let i = 0; i < qur.length; i++) {
//     console.log(qur[i]);
// }

// for (let value of qur) {
//     console.log(value);
// }

const spr = prompt("", "");
const products = spr.split(", ");
console.log(products.join);
