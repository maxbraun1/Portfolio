$(document).ready(function(){
    $("#menu-open-btn").on("click", function(){openMenu()});
    $("#menu-close-btn").on("click", function(){closeMenu()});
});

var menu_open = false;

function openMenu(){
    menu_open = true;
    $("#mobile-nav-background").animate({height: "100%"}, function(){
        $("#nav-links").show(400);
    });
    menuBackgroundScroll();
}

function closeMenu(){
    menu_open = false;
    $("#nav-links").hide(400, function(){
        $("#mobile-nav-background").animate({height: "0px"});
    });
}

function menuBackgroundScroll(){
    if(menu_open == true){
        $("#mobile-nav-background").css("background-position-x",0);
        $("#mobile-nav-background").css("background-position-y",0);
        $("#mobile-nav-background").animate({'background-position-x': 50,
        'background-position-y': 50},500, "linear" ,function(){menuBackgroundScroll()});
    }
}