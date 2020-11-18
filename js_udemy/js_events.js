"use strict";

// const btn = document.querySelector('button'),
   const  btns = document.querySelectorAll('button'),
          lay = document.querySelector('.btn');

// let i = 0;

const del = (e)=> {
     // console.log(e.currentTarget); - всплытие событий
     console.log(e.target);
     console.log(e.type);
     // i++;
     // if (i == 1){
     //      btn.removeEventListener('click', del);
     // }
};

// btn.addEventListener('click', () => {
//      alert('clicks');
// });

// btn.addEventListener('mouseenter', () => {
//      console.log("hover");
// });

// btn.addEventListener('click', del);
lay.addEventListener('click', del);

btns.forEach(btn => {
     btn.addEventListener('click', del, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event)=> {
     event.preventDefault();
     console.log(event.target);
});