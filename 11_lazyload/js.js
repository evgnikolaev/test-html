const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector('._load-more');


let lazyImagesPositions = [];

// определяем координаты картинок
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			//img.getBoundingClientRect().top - положение картинки относительно окна (не страницы)
			//pageYOffset - количество проскролленых пикселей
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	})
}


// проверка, докрутил ли до картинки
function lazyScrollCheck() {
	// "то что прокрутили" > "положение картинки относительно страницы" - "высота окна браузера"?
	let imgIndex = lazyImagesPositions.findIndex(item => pageYOffset > item - windowHeight);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}


window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
	if (lazyImages.length > 0) {
		lazyScrollCheck();
	}
	if (!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
	if (!loadMoreBlock.classList.contains('_loading')) {
		loadMore();
	}
}


// проверка, докрутил ли до карты
function getMap() {
	const loadMapPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		loadMapBlock.insertAdjacentHTML(
			'beforeend',
			`<iframe src="${loadMapUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
		loadMapBlock.classList.add('_loaded');
	}
}


// подгрузка конетнта, кодга достигнем конца блока
function loadMore() {
	const loadMorePos = loadMoreBlock.getBoundingClientRect().top + pageYOffset; //координата блока
	const loadMoreBlockHeight = loadMapBlock.offsetHeight;//высота блока с контентом

	if (pageYOffset > (loadMorePos + loadMoreBlockHeight) - windowHeight) {
		getContent();
	}
}


async function getContent() {
	if (!document.querySelector('._loading-icon')) {
		loadMoreBlock.insertAdjacentHTML(
			'beforeend',
			"<div class='_loading-icon'>LOADING</div>"
		)
	}
	loadMoreBlock.classList.add('_loading');

	let response = await fetch('_more.html', {
		method: "GET",
	});

	if (response.ok) {
		let result = await response.text();
		loadMoreBlock.insertAdjacentHTML('beforeend', result);
		loadMoreBlock.classList.remove('_loading');
		if (document.querySelector('._loading-icon')) {
			document.querySelector('._loading-icon').remove()
		}
	} else {
		console.error('error');
	}

}