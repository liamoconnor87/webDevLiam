$(document).ready(function(){

    // NAVBAR
    $('.navbar').mouseenter(function(){
        $(this).removeClass('navbar-bg');
        $(this).addClass('navbar-bg-solid navbar-shad');
    })

    // NAVBAR
    $('.navbar').mouseleave(function(){
        $(this).removeClass('navbar-bg-solid navbar-shad');
        $(this).addClass('navbar-bg');
    })

    // MY WORK
    $('.preview-overlay').mouseenter(function(){
        $(this).animate({
            opacity: 0
        },200);
    })

    // MY WORK
    $('.preview-overlay').mouseleave(function(){
        $(this).animate({
            opacity: 1
        },200);
    })

});