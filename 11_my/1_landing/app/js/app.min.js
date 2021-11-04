// user-header
let user_icon = document.querySelector('.user-header__link');
let user_menu = document.querySelector('.user-header__body');

user_icon.addEventListener("click", (e) => {
	e.preventDefault();
	user_menu.classList.toggle('_active');
});


//burger
let iconMenu = document.querySelector('.icon-menu');
let body = document.querySelector('body');
let menyBody = document.querySelector('.menu-header__body');
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
