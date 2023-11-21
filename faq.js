$(document).ready(function(){
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#answer5").hide();
    $("#answer6").hide();
    $("#answer7").hide();
    $("#answer8").hide();

    $("#faq1").click(function(){
        $("#answer1").slideToggle();
        $("#faq1").toggleClass('faqact');
    });

    $("#faq2").click(function(){
        $("#answer2").slideToggle();
        $("#faq2").toggleClass('faqact');
    });

    $("#faq3").click(function(){
        $("#answer3").slideToggle();
        $("#faq3").toggleClass('faqact');
    });

    $("#faq4").click(function(){
        $("#answer4").slideToggle();
        $("#faq4").toggleClass('faqact');
    });

    $("#faq5").click(function(){
        $("#answer5").slideToggle();
        $("#faq5").toggleClass('faqact');
    });

    $("#faq6").click(function(){
        $("#answer6").slideToggle();
        $("#faq6").toggleClass('faqact');
    });

    $("#faq7").click(function(){
        $("#answer7").slideToggle();
        $("#faq7").toggleClass('faqact');
    });

    $("#faq8").click(function(){
        $("#answer8").slideToggle();
        $("#faq8").toggleClass('faqact');
    });
});