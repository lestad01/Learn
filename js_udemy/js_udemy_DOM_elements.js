"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper'); 

     // box.style.backgroundColor = 'yellow';
     // box.style.width = '300px';

     box.style.cssText = 'background-color: green; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

     // for (let i =0; i < hearts.length; i++) {
     //      hearts[i].style.backgroundColor = 'blue';
     // }
     
     hearts.forEach(item => {
          item.style.backgroundColor = "blue";
     });
 
 const div = document.createElement('div');

 div.classList.add('black');
 wrapper.append(div);

// wrapper.appendChild(div);

//  wrapper.prepend(div);

// hearts[2].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hi</h2>');