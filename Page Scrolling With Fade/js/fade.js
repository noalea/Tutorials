// as we scroll down the Page
// calculate the blue backgrounds opacity

$(document).on("scroll", function () {
  var scrollTop = $(document).scrollTop();
  var scrollBottom = scrollTop + $(window).height();

  var pageBottom = $(document).height();

  var diff = pageBottom - scrollBottom;

  var opacity = 1 - (diff / 300);

  $(".fade-bg").css({
    "opacity": opacity
  });
});
