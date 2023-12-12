$(document).ready(function(){
    $('.downsym').show();
    $('.upsym').hide();

    var isMobile = false; 
    
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    if(isMobile == true){
        $("#nav li").hover(
            function(){
                $(this).children('ul').hide();
                $(this).children('ul').slideDown('fast');
            },
            function () {
                $('ul', this).slideUp();            
        });
    
        $('.lala1').click(function(){
            $(this).addClass('activ');
            $('.lala1 .downsym').hide();
            $('.lala1 .upsym').delay(400).show();
        });
    
        $('.lala2').click(function(){
            $(this).addClass('activ');
            $('.lala2 .downsym').hide();
            $('.lala2 .upsym').delay(400).show();
            $('.menulala2').slideDown();
        });
    
        $('.lala3').click(function(){
            $(this).addClass('activ');
            $('.lala3 .downsym').hide();
            $('.lala3 .upsym').delay(400).show();
            $('.menulala3').slideDown();
        });

        let click_compare_value, click_language1_value, click_language2_value;

        $('.menus1').click(function(){
            click_compare_value=$(this).attr('value');
            $('.comparemenu').html(click_compare_value);
            $('.lala1').off('click');

            $('.menulala1').slideUp(1);
            $('.lala1').removeClass('activ');
            $('.lala1 .upsym').hide();
            $("#nav li").hover(function(){
                $(this).children('ul').hide();    
            });
        });

        $('.menus2').click(function(){
            click_language1_value = $(this).attr('value');
            $('.languagemenu1').html(click_language1_value);
            $('.lala2').off('click');
            
            
            $('.menulala2').slideUp(1);
            $('.lala2').removeClass('activ');
            $('.lala2 .upsym').hide();
        });

        $('.menus3').click(function(){
            click_language2_value = $(this).attr('value');
            $('.languagemenu2').html(click_language2_value);
            $('.lala3').off('click');
            
            $('.menulala3').slideUp(1);
            $('.lala3').removeClass('activ');
            $('.lala3 .upsym').hide();
        });

        $('.flips').click(function(){
            if (click_language1_value==undefined || click_language2_value==undefined){
                alert('Please select all of the languages first.')
            }
            else if(click_language1_value == click_language2_value){
                alert("Language 1 and Language 2 is the same.");
            }
            else{
                let temp;
                temp = click_language1_value;
                click_language1_value = click_language2_value;
                click_language2_value = temp;

                $('.languagemenu2').html(click_language2_value);

                $('.languagemenu1').html(click_language1_value);
                $('.upsym').hide();

                $(".flips").toggleClass('flippp');
            }
        });

        $('.resetb').click(function(){
            location.reload();
        });

    $('.hiding').hide();
    $('.result_text').hide();
    $('.leftside').hide();
    $('.rightside').hide();

    $('.convert').click(function(){
        $('.hiding').hide();

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
        
        else if (click_language1_value == click_language2_value){
            alert("The first language and the second language cannot be the same")
            location.reload();
        }

        else{
            $('.result_text').fadeIn();

            if(click_language1_value == 'C'){
                let isi1 = document.getElementById(click_compare_value+'C');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('C');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C++'){
                    let isi2 = document.getElementById(click_compare_value+'C++');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C++');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'Python'){
                    let isi3 = document.getElementById(click_compare_value+'Py');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('Python');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

            else if(click_language1_value == 'C++'){
                let isi1 = document.getElementById(click_compare_value+'C++');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('C++');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C'){
                    let isi2 = document.getElementById(click_compare_value+'C');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'Python'){
                    let isi3 = document.getElementById(click_compare_value+'Py');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('Python');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

            else if(click_language1_value == 'Python'){
                let isi1 = document.getElementById(click_compare_value+'Py');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('Python');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C'){
                    let isi2 = document.getElementById(click_compare_value+'C');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'C++'){
                    let isi3 = document.getElementById(click_compare_value+'C++');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('C++');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

        }

    });
    }


//the configuration for devices excluding phone and tablet
    else{
        $('.resetb').hide();
        $('.reset').hide();

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
            <i class="fa-solid fa-caret-down downsym laa"></i>\
            <i class="fa-solid fa-caret-up upsym laa"></i>');
            
            $('.menulala1').slideUp(1);
            $('.lala2').triggerHandler('hover');
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

        $('.flips').click(function(){
            if (click_language1_value==undefined || click_language2_value==undefined){
                alert('Please select all of the languages first.')
            }
            else if(click_language1_value == click_language2_value){
                alert("Language 1 and Language 2 is the same.");
            }
            else{
                let temp;
                temp = click_language1_value;
                click_language1_value = click_language2_value;
                click_language2_value = temp;

                $('.languagemenu2').html(click_language2_value + '&ensp;\
                <i class="fa-solid fa-caret-down downsym"></i>\
                <i class="fa-solid fa-caret-up upsym"></i>');

                $('.languagemenu1').html(click_language1_value + '&ensp;\
                <i class="fa-solid fa-caret-down downsym"></i>\
                <i class="fa-solid fa-caret-up upsym"></i>');
                $('.upsym').hide();

                $(".flips").toggleClass('flippp');
                    
                
            }
        });

    $('.hiding').hide();
    $('.result_text').hide();
    $('.leftside').hide();
    $('.rightside').hide();

    $('.convert').click(function(){
        $('.hiding').hide();

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
        
        else if (click_language1_value == click_language2_value){
            alert("The first language and the second language cannot be the same")
        }

        else{
            $('.result_text').fadeIn();
            
            if(click_language1_value == 'C'){
                let isi1 = document.getElementById(click_compare_value+'C');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('C');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C++'){
                    let isi2 = document.getElementById(click_compare_value+'C++');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C++');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'Python'){
                    let isi3 = document.getElementById(click_compare_value+'Py');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('Python');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

            else if(click_language1_value == 'C++'){
                let isi1 = document.getElementById(click_compare_value+'C++');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('C++');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C'){
                    let isi2 = document.getElementById(click_compare_value+'C');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'Python'){
                    let isi3 = document.getElementById(click_compare_value+'Py');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('Python');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

            else if(click_language1_value == 'Python'){
                let isi1 = document.getElementById(click_compare_value+'Py');
                $(isi1).appendTo('.leftside');
                $('.lefttext').text('Python');
                $(isi1).delay(600).fadeIn();
                $('.leftside').delay(500).fadeIn();

                if(click_language2_value == 'C'){
                    let isi2 = document.getElementById(click_compare_value+'C');
                    $(isi2).appendTo('.rightside');
                    $('.righttext').text('C');
                    $(isi2).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
                else if(click_language2_value == 'C++'){
                    let isi3 = document.getElementById(click_compare_value+'C++');
                    $(isi3).appendTo('.rightside');
                    $('.righttext').text('C++');
                    $(isi3).delay(600).fadeIn();
                    $('.rightside').delay(500).fadeIn();
                }
            }

        }

    });   
    }

        // searchbar desktop
    var is_1300 = false;
    if( $('#myInput2').css('display')=='none') {
        is_1300 = true;       
    }
  
    if (is_1300 == true) {
        $('#findA').click(function(){
            $('#myInput2').toggle();
            $('#findA').toggleClass('findIcon');
        });
    }
  
    $("#myInput2").focus(function(){
        $("#myUL li a").css("display","block");
        $('#ico2').css("display","block");
    });
  
    $("#ico2").click(function(){
        $("#myUL li a").css("display","none");
        $('#ico2').css("display","none");
    });
    
  
    //ipad and mobile
    $("#myInput").focus(function(){
        $("#myUL2 li a").css("display","block");
      });
    
      $('#findB').click(function(){
        $('.input-search').show();
      });
      $('.ico').click(function(){
        $('.input-search').hide();
        $("#myUL2 li a").css("display","none");
      })
});


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
  }
  
  function myFunctionMobile() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
  }