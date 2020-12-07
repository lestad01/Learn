"use strict";

// touchstart при касании к элементу 
// touchmove при смещении пальца по элементу
// touchend при окончании пальца от элемента
// touchenter при ведении пальца 
// touchleave продолжает скользить за пределами элемента
// touchcancel 

window.addEventListener("DOMContentLoaded", ()=> {
	const box = document.querySelector('.box');

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();

		console.log(e.targetTouches[0].pageX);
		// console.log('Start');
		// console.log(e.touches);
		// console.log(e.targetTouches);
		// console.log(e.changedTouches);
	});
	// box.addEventListener('touchmove', (e) => {
	// 	e.preventDefault();

	// 	console.log('Move');
	// });
	// box.addEventListener('touchend', (e) => {
	// 	e.preventDefault();

	// 	console.log('End');
	// });
});


//touches 
// targetTouches
//changedTouches