
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

// // const copy = obj; //ссылку (передача по ссылке)

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

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

// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);


// function lose(mainFigure) {
//     let FigureObj = {};

//     let l;
//     for (l in mainFigure) {
//         FigureObj[l] = mainFigure[l]; 
//     }
//     return FigureObj;
// }
// const nombers = {
//     g: 3,
//     h: 21,
//     m:{
//         f:4,
//         u: 8
//     }
// };

// const newNombers = lose(nombers);

// newNombers.m.f = 1;
// console.log(newNombers);
// console.log(nombers);


const numbers = {
    a: 2,
    g: 4,
    v: {
        x:33,
        f: 1
    }
};
const add = {
    d:17,
    e: 22
};
//console.log(Object.assign(numbers,add));

const clone = (Object.assign({},add));
clone.d = 30;
// console.log(clone);
// console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[2] = 'good game';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress','livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,6,4];

log(...num);

const array = ["a", "b"];
const newAAray = [...array];

console.log(newAAray);

const q = {
    one:1,
    two: 2
};
const newObj = {...q};
console.log(newObj);


