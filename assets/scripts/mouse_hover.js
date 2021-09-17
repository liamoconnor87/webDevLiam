$(document).ready(function(){

    $('.section-container').mouseenter(function(){
        $('.section-title').addClass('flex').fadeIn();
    })

    $('.section-container').mouseleave(function(){
        $('.section-title').fadeOut().removeClass('flex');
    })
});