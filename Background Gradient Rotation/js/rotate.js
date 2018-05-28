var angle = 0;

function changeBackground () {

  angle += 0.5;

  $("body").css({
    "background": "linear-gradient("+ angle +"deg, #8e2de2, #4a00e0)"
  });

  requestAnimationFrame(changeBackground);
}

changeBackground();
