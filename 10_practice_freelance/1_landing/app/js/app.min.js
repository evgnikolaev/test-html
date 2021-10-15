// user-header
let user_icon = document.querySelector('.user-header__icon');
let user_menu = document.querySelector('.user-header__menu');

user_icon.addEventListener("click", (e) => {
	user_menu.classList.toggle('_active');
});

// доп проверка, чтобы две всплывашки вместе не работали
document.documentElement.addEventListener('click', (e) => {
	if (!e.target.closest('.user-header')) {
		user_menu.classList.remove('_active');
	}
});


//burger
let iconMenu = document.querySelector('.icon-menu');
let body = document.querySelector('body');
let menyBody = document.querySelector('.menu__body');
if (iconMenu != null) {
	//let delay = 500;
	iconMenu.addEventListener('click', () => {
		if (!body.classList.contains('_wait')) {
			//body_lock(delay);
			iconMenu.classList.toggle('_active');
			menyBody.classList.toggle('_active');
		}
	});
}

//main_slider
const main_slider = new Swiper('.swiper', {
	observe: true,
	observeParents: true,
	slidesToShow: 1,
	spaceBetween: 0,
	speed: 800,
	loop: true,

	navigation: {
		nextEl: '.control-main-slider__arrow-next',
		prevEl: '.control-main-slider__arrow-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			autoHeight: true,
		},
		// when window width is >= 640px
		768: {
			autoHeight: false,
		}
	}
});































