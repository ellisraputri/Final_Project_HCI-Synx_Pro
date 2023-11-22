$(document).ready(function(){
    $('.downsym').show();
    $('.upsym').hide();
    $("#nav li").hover(
        function(){
            $(this).children('ul').hide();
            $(this).children('ul').slideDown('fast');
        },
        function () {
            $('ul', this).slideUp('fast');            
    });

    $('.lala').hover(function(){
        $(this).addClass('activ');
        $('.downsym').fadeOut('fast');
        $('.upsym').delay(400).fadeIn();
        
    });

    $('.centerin3').mouseleave(function(){
        $('.lala').removeClass('activ');
        $('.upsym').fadeOut('fast');
        $('.downsym').delay(450).fadeIn();
    });
    
});