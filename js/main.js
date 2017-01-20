$(document).ready(function() {


  TweenMax.from(".logo", 0.5, {top: -3000, delay: 0.5, ease: Power4.easeInOut});
  TweenMax.from(".hero-title", 0.5, {top: -4000, delay: 0, ease: Power4.easeInOut});
  TweenMax.from(".hero-subtext", 1, {opacity: 0, delay: 1, ease: Power4.easeOut});
  TweenMax.from(".hero-label", 1, {opacity: 0, delay: 0, ease: Power4.easeInOut});
  TweenMax.from(".uploadBtn", 0.5, {opacity: 0, delay: 0, ease: Power4.easeInOut});

});
