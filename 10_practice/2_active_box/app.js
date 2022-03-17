$(function () {

	let introH = $('.intro').innerHeight(),
		scrollTop = $(this).scrollTop(),
		header = $('#header'),
		nav = $('#nav'),
		navToggle = $('#navToggle');


	function scrollTo(scrollTop, introH) {
		if (scrollTop > introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}


	$(window).on('scroll resize', function () {
		let scrollTop = $(this).scrollTop();
		scrollTo(scrollTop, introH);
	});


	$('[data-scroll]').on('click', function (e) {
		e.preventDefault();
		blockId = $(this).data('scroll');
		blockOffset = $(blockId).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset - 52
		}, {
			duration: 700
		});
		nav.toggleClass('show');
	});


	navToggle.on('click', function (e) {
		e.preventDefault();
		nav.toggleClass('show');
	});


	$('#reviewsSlider').slick({
		infinite: true,
		// fade:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots:true
	});

});