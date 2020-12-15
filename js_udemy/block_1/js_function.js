"use strict";

function noc(numbers) {
    console.log(numbers);
}
noc((2*2)+18);


let num = 102;

function showFirstMessage(tex, argument) {
    console.log(tex, argument);
    let num = 101;
    console.log(num);
}

showFirstMessage("Hello, my dear Friend", "Maksim");
console.log(num);

// const s = 21;

// function showNumbers(date, name) {
//     console.log(date, name);
//     let s = "Contacts";
//     console.log(s);
// }
// showNumbers("01.07.1995", "Aleksander");
// console.log(s);





function calc(a,b) {
    return (a - b);
}

console.log(calc(228, 118));
console.log(calc(2, 6));
console.log(calc(228, 228));
///

function ret(nam) {
    let nun = 50;
    console.log(nam);
    ////
    return nun;
}
const anotherNum = ret(2*50);
console.log(anotherNum);

///

console.log(kalk(2,-1));
console.log(kalk(7,8));
console.log(kalk(113, 2));
function kalk(a, b){
    return(a * b);
}
///

const logger = function() {
    console.log("Hi, Bitch!");
};

logger();
///


const wow = (a, b) => { 
    return a / b;
};
console.log(wow(22,11));
//

let a = 4;
 function addTwo(x) {
   let ret = x / 2;
   return ret;
 }
 let b = addTwo(a);
  console.log(b);


  let w = "8";
    function showThe(nun) {
        let v = "2" + "3" + nun;
        return v;
    } 
    let n = showThe(w);
    console.log(n);
