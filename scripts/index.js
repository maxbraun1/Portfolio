$(document).ready(function () {
  AOS.init();

  $("#secondary-intro-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      1500
    );
  });
});
