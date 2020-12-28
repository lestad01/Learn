"use strict"

const p = document.querySelectorAll('p');
console.log(p);



function loadScript (src) {
    const scrip = document.createElement('script');
scrip.src = src;
// scrip.async = false;
document.body.append(scrip);
}

loadScript("js_udemy/js_defer_async_2.js");
loadScript("js_udemy/some.js");

