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
 

