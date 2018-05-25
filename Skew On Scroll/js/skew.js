var section = $("section");
var currentPixel = window.pageYOffset;

var looper = function () {
  var newPixel = window.pageYOffset;
  var diff = newPixel - currentPixel;
  var speed = diff * 1.5;

  section.css({
    "transform": "skewY("+ speed + "deg)"
  });

  currentPixel = newPixel;

  requestAnimationFrame(looper);
};

looper();
