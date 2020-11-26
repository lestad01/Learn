"use strict";

// touchstart при касании к элементу 
// touchmove при смещении пальца по элементу
// touchend при окончании пальца от элемента
// touchenter при ведении пальца 
// touchleave продолжает скользить за пределами элемента
// touchcancel 

window.addEventListener("DOMContentLoaded", ()=> {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('Start');
	});
});