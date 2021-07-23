$(function () {

	//filter
	$('[data-filter]').on('click', function (event) {
		event.preventDefault();

		let targetCategory = $(this).data('filter');

		if (targetCategory === 'all') {
			$('[data-cat]').removeClass('hide');
		} else {
			$('[data-cat]').each(function () {
				let $this = $(this),
					category = $this.data('cat');

				if (category !== targetCategory) {
					$this.addClass('hide');
				} else {
					$this.removeClass('hide');
				}
			});
		}
	});


	//modal
	$('[data-modal]').on('click', function (event) {
		event.preventDefault();

		let $this = $(this),
			modalId = $this.data('modal');

		$(modalId).addClass('show');
		$('body').addClass('no-scroll');

		setTimeout(function () {
			$(modalId).find('.modal__dialog').css({
				transform: 'rotateX(0)'
			});
		}, 200);

	});


	$('[data-close]').on('click', function (event) {
		event.preventDefault();

		let $this = $(this),
			parent = $this.parents('.modal');

		parent.find('.modal__dialog').css({
			transform: 'rotateX(90deg)'
		});

		setTimeout(function () {
			parent.removeClass('show');
			$('body').removeClass('no-scroll');
		}, 200);
	});


	$('.modal').on('click', function (event) {
		let $this = $(this);

		$this.find('.modal__dialog').css({
			transform: 'rotateX(90deg)'
		});

		setTimeout(function () {
			$this.removeClass('show');
			$('body').removeClass('no-scroll');
		}, 200);


	});

	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation();
	});


	// slider https://kenwheeler.github.io/slick/
	$('#worksSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true
	});


	$('.slickPrev').on('click', function (e) {
		e.preventDefault();
		$('#worksSlider').slick('slickPrev');
	});

	$('.slickNext').on('click', function (e) {
		e.preventDefault();
		$('#worksSlider').slick('slickNext');
	});


	$('#navToggle').on('click', function (e) {
		e.preventDefault();
		$('#nav').toggleClass('show');
	});

});




































