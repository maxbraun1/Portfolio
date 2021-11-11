$(document).ready(function(){
    $("#nav-open-btn").on("click", function(){openMenu()});
    $("#nav-close-btn").on("click", function(){closeMenu()});
});

var menu_open = false;

function openMenu(){
    menu_open = true;
    $("nav").animate({height: "100%"}, function(){
        $("#nav-links").show(400);
    });
}

function closeMenu(){
    menu_open = false;
    $("#nav-links").hide(400, function(){
        $("nav").animate({height: "0px"});
    });
}