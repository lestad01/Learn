"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {       //создаем свой метод (это действие,которые может совершать объект)
        console.log("2" * "2");
    }
};

options.makeTest();


const{border,background} = options.colors; //деструктуризация (вытащили 2 ключа в отдельную переменную)
console.log(background);

console.log(Object.keys(options).length);



console.log(options.name);
delete options.width;

console.log(options);


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
}
console.log(counter);