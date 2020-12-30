"use strict";

if (9 == 8) {
    console.log('ok!');
} else {
    console.log('Error!');
}


const num = 69;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
   console.log('too much!');
} else {
   console.log('Good!');
}

// const yeap = null;
// const yeah = 20;
// let name = yeap && yeah;
// console.log(name);

// let hour = 12;
// let minute = 10;
// if(hour == 12 && minute == 9) {
//     console.log('Beginning in 12:10!');
// }else{
//     console.log('NOPE!')
// }


const num = 40;
(num > 30 ) ? console.log('Ok!'):console.log('Error!');

let nam;
nam = prompt('Vote your number');
switch(nam) {
    case '49': 
        prompt('Неверно!');
        break;
    case '228':
        prompt('Неверно!');
        break;
    default:
        prompt('Не судьба!');
        break;
    case '48':
        prompt('Bingo!');
        break;
}