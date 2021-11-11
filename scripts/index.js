$(document).ready(function(){
    typing();
    blink();
    centerOrbit();
});

$(window).resize(function(){
    centerOrbit();
});

$(document).scroll(function(){
    skillHeaderSlide();
    projectHeaderSlide();
});

var list = ["developer", "self-learner", "student", "\"gamer\"", "UI/UX enthusiast"]
index = 0;

function blink(){
    setTimeout(function(){ 
        $("#dash").toggle();
        index++;
        blink();
    }, 500);
}

var phraseIndex = 0;

async function typing() {
    if(phraseIndex >= list.length){
        phraseIndex = 0;
    }
    typePhrase(list[phraseIndex]); 
}


var letterIndex = 0;

function typePhrase(phrase){
    var deferred = $.Deferred();
    setTimeout(function(){
        $("#change").append(phrase.charAt(letterIndex));
        if (letterIndex < phrase.length -1) {  
            letterIndex++
            typePhrase(phrase);
        }else{
            letterIndex = 0;
            phraseIndex++;
            setTimeout(function(){
                $("#change").text("");
                typing();
            },1500);
        }
    },100);
}

function skillHeaderSlide(){
    var width = $(window).width();
    var height = $(window).height();
    var verticalPos = $(window).scrollTop();
    var elementOffset = $("#skills-section-header").offset().top - height;
    var scrollPast = verticalPos - elementOffset;
    var elementWidth = $("#skills-section-header").width();
    var pos = (width * scrollPast/height) - elementWidth;
    $("#skills-section-header").css("left", pos+"px");
}

function projectHeaderSlide(){
    var width = $(window).width();
    var height = $(window).height();
    var verticalPos = $(window).scrollTop();
    var elementOffset = $("#projects-section-header").offset().top - height;
    var scrollPast = verticalPos - elementOffset;
    var elementWidth = $("#projects-section-header").width();
    var pos = (width * scrollPast/height) - elementWidth;
    $("#projects-section-header").css("right", pos+"px");
}

function centerOrbit(){
    var width = $(window).width();
    var height = $(window).height();
    var half = $("#orbit").width()/2;

    $("#orbit").css("bottom",-half);

    if($(window).width() < 1000){
        var middle = width/2 - half;
        $("#orbit").css("left",middle);
    }else{
        console.log("yes");
        $("#orbit").css("right",-half);
        $("#orbit").css("left","auto");
    }
}