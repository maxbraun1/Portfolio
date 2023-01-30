$(document).ready(function(){
    AOS.init();

    $("#secondary-intro-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1500);
    });

    $(document).mousemove(function(e) {
        window.x = e.pageX;
        window.y = e.pageY;
        midpagex = $(document).width()/2;
        midpagey = $(window).height()/2;

        offsetX = Math.round(window.x - midpagex) / 15;
        offsetY = Math.round(window.y - midpagey) / 15;
        if(offsetX >= 0){
            $("#blob").css({ marginRight : Math.abs(offsetX) + "px" });
        }else{
            $("#blob").css({ marginLeft : Math.abs(offsetX) + "px" });
        }

        if(offsetY <= 0){
            $("#blob").css({ marginTop : Math.abs(offsetY) + "px" });
        }else{
            $("#blob").css({ marginBottom : Math.abs(offsetY) + "px" });
        }
    });
});