$(document).ready(function(){
    let value=1;
    $(".page2").hide();
    $(".page3").hide();
    $(".page4").hide();
    $(".page5").hide();
    $('.buttonprev').attr('disabled','disabled');

    $.fn.checkvalue = function(value) { 
        if(value==1){
            $('.buttonprev').attr('disabled','disabled');
        }
        else{
            $('.buttonprev').removeAttr('disabled');
        }
    
        if(value==5){
            $('.buttonnext').attr('disabled','disabled');
            $(".buttonnext").off("mouseenter mouseleave");
        }
        else{
            $('.buttonnext').removeAttr('disabled');
        }
    };

    $(function(){
        $(".flip").flip({
            trigger: 'click',
            axis:'x'
        });
    });

    $(".buttonnext").click(function(){
        value+=1;
        $('.page'+(value-1)).hide("slide", { direction: "left", distance:"2%"}, 300);
        $('.page'+(value)).delay(300.001).show("slide", { direction: "right", distance:"2%"}, 300);
        $('.mid').text(value + " / 5")
        $.fn.checkvalue(value);
    });

    $(".buttonprev").click(function(){
        value-=1;
        $('.page'+(value+1)).hide("slide", { direction: "left", distance:"2%"}, 300);
        $('.page'+(value)).delay(300.001).show("slide", { direction: "right", distance:"2%"}, 300);
        $('.mid').text(value + " / 5")
        $.fn.checkvalue(value);
    });

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