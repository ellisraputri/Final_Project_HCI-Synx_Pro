$(document).ready(function(){
    $('.downsym').show();
    $('.upsym').hide();
    $('.resultss').hide();

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

    let click_compare_value, click_language1_value, click_language2_value;

    $('.menus1').click(function(){
        click_compare_value=$(this).attr('value');
        $('.comparemenu').html(click_compare_value + '&ensp;\
        <i class="fa-solid fa-caret-down downsym"></i>\
        <i class="fa-solid fa-caret-up upsym"></i>');
        
        $('.menulala1').slideUp(1);
    });

    $('.menus2').click(function(){
        click_language1_value = $(this).attr('value');
        $('.languagemenu1').html(click_language1_value + '&ensp;\
        <i class="fa-solid fa-caret-down downsym"></i>\
        <i class="fa-solid fa-caret-up upsym"></i>');
        
        $('.menulala2').slideUp(1);
    });

    $('.menus3').click(function(){
        click_language2_value = $(this).attr('value');
        $('.languagemenu2').html(click_language2_value + '&ensp;\
        <i class="fa-solid fa-caret-down downsym"></i>\
        <i class="fa-solid fa-caret-up upsym"></i>');
        
        $('.menulala3').slideUp(1);
    });
    

    $('button').click(function(){
        if (click_compare_value==undefined || click_language1_value==undefined || click_language2_value==undefined){
            let msg = 'PLEASE FILL IN:';
            if(click_compare_value==undefined){
                msg = msg + '\n- "What to compare?" section';
            }
            if(click_language1_value==undefined){
                msg = msg + '\n- "Language 1" section';
            }
            if(click_language2_value==undefined){
                msg = msg + '\n- "Language 2" section';
            }
            alert(msg)
        }
        

    });

    
        
    
    
    
});