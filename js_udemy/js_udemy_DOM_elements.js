'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.guerySelectorAll('heart'),
      oneHeart = document.querySelector('.heart');

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

 document.querySelector('wrapper').append(div);