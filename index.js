 /*Intro */
 let intro = document.querySelector('.intro');
 let logo = document.querySelector('.logo');
 let logoSpan = document.querySelectorAll('.logo-parts');
 let navbar = document.querySelector('.navv')

 window.addEventListener('DOMContentLoaded', () => {
     setTimeout(() => {
        logoSpan.forEach((span, index) => {
             setTimeout(() => {
                span.classList.add('active');
             }, (index + 1) * 100);
        });
 
        setTimeout(() => {
           logoSpan.forEach((span, index) => {
             setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade'); 
             }, (span + 1) * 50);
           });
        }, 5000);
 
        setTimeout(() => {
          intro.style.top  = '-100vh';
          $('html, body').animate({scrollTop:0},'50');
       }, 1800);    
     });
 });

 
 $(document).ready(function() {
  /*feature */
  // var isMobile = false; 
    
  // if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  //     || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  //     isMobile = true;
  // }

  // if(isMobile == true){
  //   $('.feature').click(function(){
  //     var feature = $(this).data('bs-target');
  //     $('#'+ feature).slideToggle('slow');
  //   });
  //   $('.textfeature1').hide();
  //   $('.textfeature2').show();
  // }
  // else{
  //   $('.feature').hover(function(){
  //     var feature = $(this).data('bs-target');
  //     $('#'+ feature).slideToggle('slow');
  //   });
  //   $('.textfeature1').show();
  //   $('.textfeature2').hide();
  // }


  /*tabbed content */
  $('.tabContent').not(':first').hide();
  $('.tabs div').click(function() {

    $('.tabContent').hide();
    $('.tabs div').removeClass('tab-active');
    $(this).addClass('tab-active');

    var tab = $(this).data('bs-target');
    $('#' + tab).show();
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
        $("#myUL2 li a").css("display","none");
      });

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


/*swiper/slidehow */
 var swiper = new Swiper(".mySwiper", {
   effect: "cube",
   loop: true,
   autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
   cubeEffect: {
     shadow: true,
     slideShadows: true,
     shadowOffset: 2,
     shadowScale: 0.74,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });
 

//Send Mails
var fields={};
let msg = 'PLEASE RECHECK AND REFILL:\n';
$(".spin").hide();

document.addEventListener("DOMContentLoaded", function() {
  fields.fullName = document.getElementById('full_name');
  fields.email = document.getElementById('emails');
  fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null){
    return false;
  } 

  let isFieldValid = validationFunction(field.value);
  if (validationFunction == isNotEmpty && isFieldValid === false && field === fields.fullName){
    msg += '- "Full Name" section \n';
  }
  else if (validationFunction == isEmail && isFieldValid===false){
    msg += '- "Email" section\n'
  }
  else if (validationFunction == isNotEmpty && isFieldValid === false && field === fields.message){
    msg += '- "Message" section';
  }
  return isFieldValid;
}

function isValid() {
  var valid = true;
  msg='PLEASE RECHECK AND REFILL:\n'
  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.message, isNotEmpty);
  
  return valid;
}

function sendMail() {
  (function () {
      emailjs.init("mWweWWLjvaFCUTbVK");
  })();

  event.preventDefault();
  var params = {
    full_name: document.querySelector("#full_name").value,
    email: document.querySelector("#emails").value,
    message: document.querySelector("#message").value,
  };

  const serviceID = "service_9up1bve";
  const templateID = "template_bgjsff5";

  if(isValid()){
    $(".submitt").delay(100).hide();
    $('.spin').delay(300).show();
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("full_name").value = "";
        document.getElementById("emails").value = "";
        document.getElementById("message").value = "";
        alert("Your message sent successfully!")
        $(".submitt").delay(200).show();
        $('.spin').hide();

    })
    .catch(err=>console.log(err));
  }
  else{
    alert(msg);
  }
    

}

