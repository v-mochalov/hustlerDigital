(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  slidesToScroll: 1,
  speed: 1000,
  asNavFor: ".slider__left",
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false
    }
  }]
});
$('.slider__left').slick({
  infinite: true,
  arrows: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  asNavFor: ".slider__right",
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
  }]
});
var loadMoreBtn = document.querySelector('#load-more-btn');
var currentItem = 7;

loadMoreBtn.onclick = function () {
  var boxes = _toConsumableArray(document.querySelectorAll('.blogers__content .blogers__box'));

  for (var i = currentItem; i < currentItem + 8; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 7;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

gsap.registerPlugin(ScrollTrigger);
var numbers = document.querySelectorAll('.counters');
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: numbers,
    start: 'center center',
    markers: false,
    toggleActions: 'restart resume '
  }
});
gsap.utils.toArray('.counterTwo').forEach(function (el) {
  var target = {
    val: 0
  };
  tl.to(target, {
    val: el.getAttribute('data-number'),
    duration: 1,
    onUpdate: function onUpdate() {
      el.innerText = target.val.toFixed(0);
    }
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
gsap.to(".gsap__blogers-btn", {
  scrollTrigger: ".gsap__blogers",
  duration: 1.5,
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

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
