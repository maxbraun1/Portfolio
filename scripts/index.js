$("nav").ready(function(){

    typing();
    blink();
});

$(document).scroll(function(){
    var verticalPos = $(window).scrollTop() - 150;
    var width = $(window).width();
    var height = $(window).height();
    var pos = (width * verticalPos/height) - 200;
    $("#skills-section-header").css("left", pos+"px");
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


// Responsive

$(document).ready(function(){
    canvasSetup();
});

$(window).resize(function(){
    canvasSetup();
});



function canvasSetup(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width()
    var navHeight = $("nav").outerHeight()

    var canvasHeight = windowHeight - navHeight;
    $("#canvas").height(canvasHeight);
    
    if(windowHeight > windowWidth){
        $("#message h1").css("writing-mode","vertical-rl");
        $("#message-break").html("<br>");
    }else{
        $("#message h1").css("writing-mode","inherit");
        $("#message-break").html("");
    }
}