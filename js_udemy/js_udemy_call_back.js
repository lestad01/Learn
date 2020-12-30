"use strict";

function first (s) {
    setTimeout( ()=> {
        console.log(s);
    }, 800);
}

function second(d) {
    setTimeout(function(){
     console.log(d);   
    }, 600);
}
first("So");
second("Hi");


function learnJS(lang,callback) {
    console.log(`I learning: ${lang}`);
    callback(); //вызывает вторую функцию,когда первая функция закончит полнгостью свое действие
}

function don() {
    console.log('I passed this lesson');
}

learnJS('English Language', don);

