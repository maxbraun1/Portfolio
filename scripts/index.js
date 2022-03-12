$(document).ready(function(){
    typing();
    blink();
    centerOrbit();
    AOS.init();
});

$(window).resize(function(){
    centerOrbit();
});

var list = ["developer", "self learner", "student", "UI Lover"]
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

function centerOrbit(){
    var width = $(window).width();
    var height = $(window).height();
    var half = $("#orbit").width()/2;

    $("#orbit").css("bottom",-half);

    if($(window).width() < 1000){
        var middle = width/2 - half;
        $("#orbit").css("left",middle);
    }else{
        $("#orbit").css("right",-half);
        $("#orbit").css("left","auto");
    }
}