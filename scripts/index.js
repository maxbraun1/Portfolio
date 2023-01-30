$(document).ready(function(){
    AOS.init();

    $("#primary-intro-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});