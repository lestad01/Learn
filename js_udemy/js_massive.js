"use strict";

const arr = [2, 13, 5, 7, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const  str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));