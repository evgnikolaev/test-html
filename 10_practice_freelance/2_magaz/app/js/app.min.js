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
let menuParents = document.querySelectorAll('.menu-page__parent');
let menuPageLinks = document.querySelectorAll('.menu-page__parent .menu-page__link');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	const menuPageLink = menuPageLinks[index];
	menuPageLink.addEventListener('mouseenter', function (e) {
		console.log(e.target);
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener('mouseleave', function (e) {
		menuParent.classList.remove('_active');
	});
}




//menu-burger
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('_active');
	menuPageBody.classList.toggle('_active');
});






















