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


//products-slider
if (document.querySelector('.products-slider__item')) {
	let productSlider = new Swiper('.products-slider__item', {
		observe: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		autoHeight: true,
		// loop: true,

		pagination: {
			el: '.products-slider__info',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.products-slider__arrow_next',
			prevEl: '.products-slider__arrow_prev',
		},

	});
}


//brandsSlider
if (document.querySelector('.brandsSlider')) {
	let brandsSlider = new Swiper('.brandsSlider', {
		observe: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 0,
		speed: 800,
		// autoHeight: true,
		// loop: true,

		navigation: {
			nextEl: '.brands-slider__arrow_next',
			prevEl: '.brands-slider__arrow_prev',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			}
		}

	});
}


//фильтр цена
if (document.querySelector('.price-filter__slider')) {
	const priceSlider = document.querySelector('.price-filter__slider');

	noUiSlider.create(priceSlider, {
		start: [0, 100],
		connect: true,
		tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
		range: {
			'min': 0,
			'max': 100
		}
	});


	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');

	priceStart.addEventListener('change', function () {
		priceSlider.noUiSlider.set([priceStart.value, null]);
	});

	priceEnd.addEventListener('change', function () {
		priceSlider.noUiSlider.set([null, priceEnd.value]);
	});
}

//filter
if (document.querySelector('.filter__content')) {
	let filterContent = document.querySelector('.filter__content');
	let filterTitle = document.querySelector('.filter__title');
	filterTitle.addEventListener('click', function (e) {
		filterTitle.classList.toggle('_active');
		filterContent.classList.toggle('_active');
	});
}


//spoller
let spoller = document.querySelectorAll('._spoller');
for (let index = 0; index < spoller.length; index++) {
	const item = spoller[index];
	item.addEventListener('click', function (e) {
		item.classList.toggle('_active');
	});
}

//products-slider
if (document.querySelector('.imagesMainSlider')) {
	let imagesSubSlider = new Swiper('.imagesSubSlider', {
		observe: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		speed: 800,
		// autoHeight: true,
		// loop: true,
	});

	let imagesMainSlider = new Swiper('.imagesMainSlider', {
		observe: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		thumbs: {
			swiper: imagesSubSlider
		}
		// autoHeight: true,
		// loop: true,
	});

}


//quantity
let quantityButtons = document.querySelectorAll('.quantity__button');
for (let index = 0; index < quantityButtons.length; index++) {
	const quantityButton = quantityButtons[index];
	quantityButton.addEventListener('click', function (e) {
		let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
		if (quantityButton.classList.contains('quantity__button_plus')) {
			value++;
		} else {
			value = value - 1;
			if (value < 1) {
				value = 1;
			}
		}
		quantityButton.closest('.quantity').querySelector('input').value = value;
	})
}


// Табы
let tabsItems = document.querySelectorAll('._tabs-item');
let tabsBlocks = document.querySelectorAll('._tabs-block');
for (let i = 0; i < tabsItems.length; i++) {
	const tabsItem = tabsItems[i];

	tabsItem.addEventListener('click', function (e) {
		for (let j = 0; j < tabsItems.length; j++) {
			tabsItems[j].classList.remove('_active');
			tabsBlocks[j].classList.remove('_active');
		}

		tabsItems[i].classList.add('_active');
		tabsBlocks[i].classList.add('_active');
	})
}












