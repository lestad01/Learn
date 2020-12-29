
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'tttt'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

if (btns[0].classList.contains('purple')) {
  console.log('red');
}

btns[1].addEventListener('click', ()=>{
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // }else{
  //   btns[1].classList.remove('red');
  // }
  btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// Делегирование ()=>
wrapper.addEventListener('click', (e) => {
    // console.dir(e.target); 
    // if (e.target && e.target.classList.contains('blue')) {
    //   console.log('Hello');
    // }

    // if (e.target && e.target.tagName == "BUTTON") {
    //   console.log('Hello');
    // }

    // продвинутое делегирование start
    if (e.target && e.target.matches("button.purple")) {
      console.log('Hello');
    }
    // продвинутое делегирование end
});

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Huanhe');
//   });
// });

const btn = document.createElement('button');
btn.classList.add('purple');
wrapper.append(btn);

