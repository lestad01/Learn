
"use strict";

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылку (передача по ссылке)

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.b = 10;
// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17,
    w: 9
};

//console.log(Object.assign(numbers, add)); // - поверхностная копия объекта

const clone = Object.assign({}, add);

clone.d = 22;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Hello,broucher!';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nam = [2,5,7];

log(...nam);
//

const arrray = ["a", "b"];

const newAarray = [...arrray];
console.log(newAarray);

const q = {
    one: 2,
    two: 4
};

const neWobj = {...q};

//

// function stay(From) {
//     let newConst = {}

//     let i;
//     for (i in From) {
//         newConst[i] = From[i]; 
//     }
//     return newConst;
// }

// const num = {
//     f: 11,
//     l: 4,
//     p: {
//         h:22,
//         K:31
//     }
// };

// const NewNum = stay(num);
// num.l = 16;

// console.log(num);
// console.log(NewNum);  Поверхностные копии объектов.



