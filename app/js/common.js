$(function() {

	$('.header__menu-button').on('click', function(){
		var e = $('.header__nav');
		if ( e.is(':hidden') ) {
			e.slideDown();
		} else {
			e.slideUp();
		}
	});

	$('.first-level-link').on('click', function(){
		$(this).toggleClass('active-color-accent');
		$('.main-nav__submenu').toggleClass('hidden-show-block');
	});

	$('.top-slider__slider').slick({
		arrows: false,
    infinite: true,
  	slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
  });

});
