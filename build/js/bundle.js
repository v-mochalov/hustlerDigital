(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//Burger
function burgerMenu(selector) {
  var menu = $(selector);
  var button = menu.find('.burger-menu_button', '.burger-menu_lines');
  var links = menu.find('.burger-menu_link');
  var overlay = menu.find('.burger-menu_overlay');
  button.on('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', function () {
    return toggleMenu();
  });
  overlay.on('click', function () {
    return toggleMenu();
  });

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu'); //Acordeon

$(document).ready(function () {
  $('.block__title').click(function (event) {
    if ($('.block').hasClass('one')) {// $('.block__title').not($(this)).removeClass('active');
      // $('.block__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
}); // SLIDER

$('.slider__right').slick({
  infinite: true,
  arrows: true,
  fade: true,
  slidesToShow: 1,
  initialSlide: 1,
  slidesToScroll: 1,
  speed: 1000,
  asNavFor: ".slider__left",
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
  }]
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
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
  }]
});
gsap.registerPlugin(ScrollTrigger);
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
  opacity: 1
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
  opacity: 1
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
  opacity: 1
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
  opacity: 1
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
