//Burger
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu_active');
	  
	  if (menu.hasClass('burger-menu_active')) {
		$('body').css('overlow', 'hidden');
	  } else {
		$('body').css('overlow', 'visible');
	  }
	}
  }
  
  burgerMenu('.burger-menu');

//Acordeon
$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			// $('.block__title').not($(this)).removeClass('active');
			// $('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

});

// SLIDER
$('.slider__right').slick({
	infinite: true,
	arrows: true,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	asNavFor: ".slider__left",
	responsive: [
		{
			breakpoint: 775,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				arrows: false
			}
		},
	],
});
$('.slider__left').slick({
	infinite: true,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	asNavFor: ".slider__right",
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
			}
		},
	],
});


gsap.registerPlugin(ScrollTrigger);
const numbers = document.querySelectorAll('.counters');
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: numbers,
    start: 'center center',
    markers: false,
    toggleActions: 'restart resume ',
  },
});

gsap.utils.toArray('.counterTwo').forEach(function (el) {
	var target = { val: 0 };
	tl.to(target, {
	  val: el.getAttribute('data-number'),
	  duration: 1,
	  onUpdate: function () {
		el.innerText = target.val.toFixed(0);
	  },
	});
  });
  tl.play();


gsap.to(".gsap__title", {
	scrollTrigger: ".gsap__title",
	duration: 1.5,
	// delay: 0.5,	
	stagger: 0.1,
	scale: 1,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__intro", {
	scrollTrigger: ".gsap__intro",
	duration: 1.5,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__intro-circle", {
	scrollTrigger: ".gsap__intro-circle",
	delay: 1.5,
	duration: 1,
	opacity: 1,
	scale: 1
	
});
gsap.to(".gsap__header", {
	scrollTrigger: ".gsap__header",
	duration: 1,
	delay: 0.2,	
	opacity: 1
});
gsap.to(".gsap__video", {
	scrollTrigger: ".gsap__video",
	duration: 1,
	delay: 0.5,	
	stagger: 0.1,
	x: 0,
	opacity: 1
});
gsap.to(".gsap__video-img", {
	scrollTrigger: ".gsap__video-img",
	duration: 1,
	opacity: 1,
	scale: 1
});
gsap.to(".gsap__arrow", {
	scrollTrigger: ".gsap__arrow",
	duration: 1.2,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__service", {
	scrollTrigger: ".gsap__service",
	duration: 1,
	stagger: 0.15,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__accordeon", {
	scrollTrigger: ".gsap__accordeon",
	duration: 1,
	delay: 0.2,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__mark", {
	scrollTrigger: ".gsap__mark",
	duration: 40,
	x: -2000,
	repeat: -1
});
gsap.to(".gsap__slider", {
	scrollTrigger: ".gsap__slider",
	duration: 1,
	x: 0,
	opacity: 1
});
gsap.to(".gsap__slider-right", {
	scrollTrigger: ".gsap__slider-right",
	duration: 1,
	x: 0,
	opacity: 1
});
gsap.to(".gsap__blog", {
	scrollTrigger: ".gsap__blog",
	duration: 1,
	stagger: 0.1,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__blogers", {
	scrollTrigger: ".gsap__blogers",
	duration: 1,
	stagger: 0.1,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__mobile", {
	scrollTrigger: ".gsap__mobile",
	duration: 1.5,
	y: 0,
	opacity: 1
});
gsap.to(".gsap__form", {
	scrollTrigger: ".gsap__form",
	duration: 1,
	stagger: 0.2,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__footer", {
	scrollTrigger: ".gsap__footer",
	duration: 1,
	stagger: 0.2,
	scale: 1,
	opacity: 1
});

		


