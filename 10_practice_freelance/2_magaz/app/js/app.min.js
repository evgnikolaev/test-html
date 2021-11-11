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

