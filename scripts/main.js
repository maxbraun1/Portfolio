$(document).ready(function(){
    $("#menu-open-btn").on("click", function(){openMenu()});
    $("#menu-close-btn").on("click", function(){closeMenu()});
});

function openMenu(){
    $("#mobile-nav-background").animate({height: "100%"}, function(){
        $("#nav-links").show(400);
    });
}

function closeMenu(){
    $("#nav-links").hide(400, function(){
        $("#mobile-nav-background").animate({height: "0px"});
    });
}