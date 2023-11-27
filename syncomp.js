$(document).ready(function(){
    $('.downsym').show();
    $('.upsym').hide();
    $("#nav li").hover(
        function(){
            $(this).children('ul').hide();
            $(this).children('ul').slideDown('fast');
        },
        function () {
            $('ul', this).slideUp();            
    });

    $('.lala1').hover(function(){
        $(this).addClass('activ');
        $('.lala1 .downsym').hide();
        $('.lala1 .upsym').delay(400).show();
    });

    $('.lala2').hover(function(){
        $(this).addClass('activ');
        $('.lala2 .downsym').hide();
        $('.lala2 .upsym').delay(400).show();
        $('.menulala2').slideDown();
    });

    $('.lala3').hover(function(){
        $(this).addClass('activ');
        $('.lala3 .downsym').hide();
        $('.lala3 .upsym').delay(400).show();
        $('.menulala3').slideDown();
    });

    $('.columnlala2').mouseleave(function(){
        $('.lala2').removeClass('activ');
        $('.lala2 .upsym').hide();
        $('.lala2 .downsym').delay(400).show();
        $('.menulala2').slideUp();
    });

    $('.columnlala3').mouseleave(function(){
        $('.lala3').removeClass('activ');
        $('.lala3 .upsym').hide();
        $('.lala3 .downsym').delay(400).show();
        $('.menulala3').slideUp();
    });

    $('.centerin3').mouseleave(function(){
        $('.lala1').removeClass('activ');
        $('.lala1 .upsym').hide();
        $('.lala1 .downsym').delay(400).show();
    });
    
});