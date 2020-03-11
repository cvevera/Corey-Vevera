$(document).ready(function () {

$(document).on("click", ".btn", projects);
$(document).on("click", "#projects-nav", projects);
$(document).on("click", "#home-nav", home);
$(document).on("click", "#about-nav", aboutMe);

function projects () {
    $(".first-text").hide();
    $(".first-paragraph").hide();
    $(".first-button").hide();
    $("#aboutMe").hide();
    $("#projects-container").show();
    // $(".picture").show();
}

function home () {
    $("#projects-container").hide();
    $("#aboutMe").hide();
    $(".first-text").show();
    $(".first-paragraph").show();
    $(".first-button").show();

}

function aboutMe () {
    $(".first-text").hide();
    $(".first-paragraph").hide();
    $(".first-button").hide();
    $("#projects-container").hide();
    $("#aboutMe").show();
}


});


