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

