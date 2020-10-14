"use strict";

function first (s) {
    setTimeout(function () {
        console.log(s);
    }, 700); 
}

function second(d) {
    console.log(d);
}
first("So");
second("Hi");



function learnJS(lang, callback) {
    console.log(`I lerning: ${lang}`);
    callback();
}

function done() {
    console.log('I passed this lesson')
}

learnJS('JavaScript', done);