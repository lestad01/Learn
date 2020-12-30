"use strict";

const btn = document.querySelector('.btn');
      let timerId,
            i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 15);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        }else{
            pos++;
            // elem.style.top = pos + "px";
            // elem.style.left = pos + "px";
            // elem.style.right = pos - "px";
            elem.style.top = pos + "px";
            elem.style.right = pos + "px";

        }
    }
}
btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout( logger, 2000);
//     //  timerId = setInterval( logger, 1000);

// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('pau pau chigiryau');
//     i++;
// }

// let id = setTimeOut(function log () {
//     console.log("HIAIA");
//     id = setTimeout(log, 500)
// }, 500);