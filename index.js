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
             }, (index + 1) * 150);
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
       }, 2500);    
     });
 });

 
 $(document).ready(function() {
  /*feature */
  $('.feature').hover(function(){
    var feature = $(this).data('bs-target');
    $('#'+ feature).slideToggle('slow');
  });


  /*tabbed content */
  $('.tabContent').not(':first').hide();
  $('.tabs div').click(function() {

    $('.tabContent').hide();
    $('.tabs div').removeClass('tab-active');
    $(this).addClass('tab-active');

    var tab = $(this).data('bs-target');
    $('#' + tab).show();
  });

  

});


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
let msg = 'Please recheck and refill:\n';
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
    msg += '- Full Name section \n';
  }
  else if (validationFunction == isEmail && isFieldValid===false){
    msg += "- Email section\n"
  }
  else if (validationFunction == isNotEmpty && isFieldValid === false && field === fields.message){
    msg += '- Message section';
  }
  return isFieldValid;
}

function isValid() {
  var valid = true;
  msg='Please recheck and refill:\n'
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

