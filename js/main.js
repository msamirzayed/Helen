$(function () {

	"use strict";

	
	
	
	$('#form').parsley();

	
	if ($('#form').length > 0) {
		$('#form').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

	
	
	
	function anim1() {
		$('html').removeClass('is-preload');
	}

	function anim2() {
		$('.orb-photo-frame').addClass('orb-active');
		$('.orb-big-menu .orb-photo-frame').removeClass('orb-active');
	}

	function anim3() {
		$('.orb-big-menu .orb-photo-frame').toggleClass('orb-active');
	}
	$(document).ready(function () {
		setTimeout(anim1, 1500);
		$('.orb-loader').addClass('orb-active');
		setTimeout(anim2, 2000);
	});

	
	
	
	const options = {
		containers: ['#orb-dynamic-content'],
		animateHistoryBrowsing: true,
		linkSelector: 'a:not([data-no-swup])',
	};
	const swup = new Swup(options);

	
	
	
	$('[data-fancybox="gallery"]').fancybox({
		animationEffect: "zoom-in-out",
		animationDuration: 600,
		transitionDuration: 1200,
		backFocus: false
	});
	$.fancybox.defaults.hash = false;

	
	
	
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	
	
	
	$('.orb-menu-btn').on('click', function () {
		$('.orb-menu-btn , .orb-big-menu-frame, .orb-big-menu').toggleClass('orb-active');
		$('.orb-top-bar-frame').toggleClass('orb-menu-opened');
		setTimeout(anim3, 300);
	});

	$('.orb-fs-menu .orb-has-children').on('click', function () {
		$('.orb-fs-menu .orb-has-children ul').removeClass('orb-active');
		$(this).children('ul').addClass('orb-active');
	});

	
	
	
	var swiper = new Swiper('.orb-slider-1s', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		pagination: {
			el: '.orb-pagination',
			type: "fraction",
		},
		navigation: {
			prevEl: '.orb-prev',
			nextEl: '.orb-next',
		},
	});

	var swiper = new Swiper('.orb-slider-3s', {
		slidesPerView: 3,
		initialSlide: 1,
		speed: 1200,
		centeredSlides: true,
		parallax: true,
		navigation: {
			prevEl: '.orb-prev',
			nextEl: '.orb-next',
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},
			768: {
				initialSlide: 0,
				spaceBetween: 40,
				slidesPerView: 1,
			},
		},
	});

	var swiper = new Swiper('.orb-banner-slider', {
		slidesPerView: 1,
		speed: 800,
		parallax: true,
		loop: true,
		effect: 'fade',
		pagination: {
			el: '.orb-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.orb-prev',
			nextEl: '.orb-next',
		},
	});

	var swiper = new Swiper('.orb-slideshow', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		effect: 'fade',
		pagination: {
			el: '.orb-pagination',
			type: "fraction",
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.orb-prev',
			nextEl: '.orb-next',
		},
	});

	
	
	
	document.addEventListener("swup:contentReplaced", function () {

		
		
		
		$('#form').parsley();

		
		if ($('#form').length > 0) {
			$('#form').parsley().on('field:success', function () {
				$('ul.parsley-errors-list').not(':has(li)').remove();
			});
		}

		
		
		
		if ($('html').hasClass('is-rendering')) {
			$("html, body").animate({
				scrollTop: 0
			}, {
				duration: 0,
				complete: function () { }
			});
		}
		$('.orb-photo-frame').removeClass('orb-active');
		setTimeout(anim2, 300);

		
		
		
		$('[data-fancybox="gallery"]').fancybox({
			animationEffect: "zoom-in-out",
			animationDuration: 600,
			transitionDuration: 1200,
			backFocus: false
		});
		$.fancybox.defaults.hash = false;

		
		
		
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		
		
		
		$('.orb-menu-btn').on('click', function () {
			$('.orb-menu-btn , .orb-big-menu-frame, .orb-big-menu').toggleClass('orb-active');
			$('.orb-top-bar-frame').toggleClass('orb-menu-opened');
			setTimeout(anim3, 300);
		});

		$('.orb-fs-menu .orb-has-children').on('click', function () {
			$('.orb-fs-menu .orb-has-children ul').removeClass('orb-active');
			$(this).children('ul').addClass('orb-active');
		});

		
		
		
		var swiper = new Swiper('.orb-slider-1s', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			pagination: {
				el: '.orb-pagination',
				type: "fraction",
			},
			navigation: {
				prevEl: '.orb-prev',
				nextEl: '.orb-next',
			},
		});

		var swiper = new Swiper('.orb-slider-3s', {
			slidesPerView: 3,
			initialSlide: 1,
			speed: 1200,
			centeredSlides: true,
			parallax: true,
			navigation: {
				prevEl: '.orb-prev',
				nextEl: '.orb-next',
			},
			breakpoints: {
				992: {
					slidesPerView: 2,
				},
				768: {
					initialSlide: 0,
					spaceBetween: 40,
					slidesPerView: 1,
				},
			},
		});

		var swiper = new Swiper('.orb-banner-slider', {
			slidesPerView: 1,
			speed: 800,
			parallax: true,
			loop: true,
			effect: 'fade',
			pagination: {
				el: '.orb-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.orb-prev',
				nextEl: '.orb-next',
			},
		});

		var swiper = new Swiper('.orb-slideshow', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			effect: 'fade',
			pagination: {
				el: '.orb-pagination',
				type: "fraction",
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.orb-prev',
				nextEl: '.orb-next',
			},
		});
	});

});
