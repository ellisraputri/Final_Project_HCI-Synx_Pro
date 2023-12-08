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
        $('.page'+(value-1)).fadeOut(300);
        $('.page'+(value)).delay(300.001).show("slide", { direction: "right", distance:"2%"}, 300);
        $('.mid').text(value + " / 5")
        $.fn.checkvalue(value);
    });

    $(".buttonprev").click(function(){
        value-=1;
        $('.page'+(value+1)).fadeOut(300);
        $('.page'+(value)).delay(300.001).show("slide", { direction: "right", distance:"2%"}, 300);
        $('.mid').text(value + " / 5")
        $.fn.checkvalue(value);
    });

});

