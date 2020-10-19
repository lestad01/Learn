
	$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/*console.log('.не смотри сюда!');*/
/*document.querySelector('Header').classList.add('team');*/
/*document.querySelector('Header').classList.remove('team');*/
/*document.querySelector('.header_burger').classList.toggle('active');*/