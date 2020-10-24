$(document).ready(function(){
 let menuBurger = document.querySelector('.menu-burger');
	menuBurger.addEventListener('click', function () {
		document.querySelector('.header__menu').classList.toggle('header__menu--visible'),
			document.querySelector('.menu-burger').classList.toggle('menu-burger--active'),
			$('body').toggleClass('lock'),
			$('.header__container').toggleClass('header__container--hidden')
	});
})