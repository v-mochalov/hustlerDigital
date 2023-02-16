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
	initialSlide: 1,
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
			}
		},
	],
});
$('.slider__left').slick({
	infinite: true,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	initialSlide: 1,
	slidesToScroll: 1,
	speed: 1000,
	asNavFor: ".slider__right",
	responsive: [
		{
			breakpoint: 775,
			settings: {
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


gsap.to(".gsap__opacity", {
	scrollTrigger: ".gsap__opacity",
	x: 0,
	duration: 1.5,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__header", {
	scrollTrigger: ".gsap__header",
	duration: 1.5,
	delay: 0.5,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__direction--title", {
	scrollTrigger: ".gsap__direction--title",
	duration: 1,		
	stagger: 0.2,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__direction--tag", {
	scrollTrigger: ".gsap__direction--tag",
	delay: 0.2,
	duration: 1.5,	
	stagger: 0.3,
	opacity: 1,	
});
gsap.to(".gsap__benefits--title", {
	scrollTrigger: ".gsap__benefits--title",
	duration: 1,		
	stagger: 0.3,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__benefits--box", {
	scrollTrigger: ".gsap__benefits--box",
	duration: 1.5,		
	stagger: 0.5,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__form", {
	scrollTrigger: ".gsap__form",
	duration: 1.5,		
	stagger: 0.5,
	opacity: 1,
});
gsap.to(".gsap__work--title", {
	scrollTrigger: ".gsap__work--title",
	duration: 1,		
	opacity: 1,
	x: 0
});
gsap.to(".gsap__work--slider", {
	scrollTrigger: ".gsap__work--slider",
	duration: 2.5,
	opacity: 1,
});
gsap.to(".gsap__map--title", {
	scrollTrigger: ".gsap__map--title",
	duration: 1,		
	opacity: 1,
	x: 0
});
gsap.to(".gsap__foot", {
	scrollTrigger: ".gsap__foot",
	duration: 0.2,		
	stagger: 0.2,
	opacity: 1,
});

		


