window.addEventListener("load", function () {
  var per = 0;
  var loading = setInterval(animate, 30);
  function animate() {
    if (per == 400) {
      clearInterval(loading);
      $(".load").hide();
    } else {
      per = per + 4;
      $(".box").css({
        width: per + "px",
      });
    }
  }
});
