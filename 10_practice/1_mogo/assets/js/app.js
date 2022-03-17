$(function () {

	const introH = $('#intro').innerHeight(),
		header = $('#header'),
		scrollOffset = $(window).scrollTop();

	// Fixed header
	function checkScroll(scrollOffset) {
		if (scrollOffset > introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	checkScroll(scrollOffset);

	$(window).on('scroll', function (event) {
		let scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});


	// Smooth scroll
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $('#' + blockId).offset().top;

		$('#nav a').removeClass('nav__link--active');
		$this.addClass('nav__link--active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 1000);
	});


	//	nav toogle
	$('#nav_toggle').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});


	//	accordion
	$('#accordion .accordion__item').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('accordion__item--active');
	});




});

