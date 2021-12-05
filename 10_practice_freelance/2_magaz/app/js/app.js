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


//menu
if (window.innerWidth < 992) {
	let menuParents = document.querySelectorAll('.menu-page__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener('click', function (e) {
			e.preventDefault();
			menuParent.parentElement.classList.toggle('_active');
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent');
	let menuPageLinks = document.querySelectorAll('.menu-page__parent .menu-page__link');

	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		const menuPageLink = menuPageLinks[index];
		menuPageLink.addEventListener('mouseenter', function (e) {
			menuParent.classList.add('_active');
		});
		menuParent.addEventListener('mouseleave', function (e) {
			menuParent.classList.remove('_active');
		});
	}
}


//menu-burger
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('_active');
	menuPageBody.classList.toggle('_active');
});


//search-page
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');
searchSelect.addEventListener('click', function (e) {
	searchSelect.parentElement.classList.toggle('_active');
	categoriesSearch.classList.toggle('_active');
});


let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener('change', function (e) {
		checkboxCategory.classList.toggle('_active');
		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');
		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories');
			let searchQuantity = searchSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
		} else {
			searchSelect.classList.remove('_categories');
		}
	});
}

//main_slider
if (document.querySelector('.mainslider')) {
	let mainslider = new Swiper('.mainslider', {
		observe: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		autoHeight: true,
		// loop: true,

		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
		},

		// navigation: {
		// 	nextEl: '.control-main-slider__arrow-next',
		// 	prevEl: '.control-main-slider__arrow-prev',
		// },

		// breakpoints: {
		// 	// when window width is >= 320px
		// 	320: {
		// 		autoHeight: true,
		// 	},
		// 	// when window width is >= 640px
		// 	768: {
		// 		autoHeight: false,
		// 	}
		// }
	});

	let mainSLiderImages = document.querySelectorAll('.mainslider__image');
	let mainSLiderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
	for (let index = 0; index < mainSLiderImages.length; index++) {
		let mainSLiderImage = mainSLiderImages[index].querySelector('img').getAttribute('src');
		mainSLiderDotts[index].style.backgroundImage = "url(" + mainSLiderImage + ")";
	}

}













