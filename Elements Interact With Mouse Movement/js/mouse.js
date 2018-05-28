// do something on mouse move
$(document).on("mousemove", function (e) {

  var mouseX = e.originalEvent.pageX;
  var mouseY = e.originalEvent.pageY;

  // go through all of the images and work out the angle
  $("img").each(function () {
    var imgX = $(this).position().left + 70;
    var imgY = $(this).position().top + 70;

    var diffX = mouseX - imgX;
    var diffY = mouseY - imgY;

    var radians = Math.atan2(diffY, diffX);

    var angle = radians * 180 / Math.PI;

    $(this).css("transform", "rotate(" + angle + "deg)");
  });

});

// every 3 seconds change arrow image
var count = 0;
var images = ["arrow-1.png", "arrow-2.png", "arrow-3.png"];

setInterval(function () {
  count += 1;
  count = count % images.length;
  var image = images[count];
  $("img").attr("src", "images/" + image);
}, 3000);
