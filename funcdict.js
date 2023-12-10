let mybutton = document.getElementById("myBtn");
  window.onscroll = function(){scrollFunction()};
  
  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      $('.myBtn').fadeIn();
    } else {
      mybutton.style.display = "none";
    }
  }

function topFunction(){
  $('html , body').animate({scrollTop:0},'1000');
}

function copyDivToClipboard(containerId) {
  var range = document.createRange();
  range.selectNode(document.getElementById(containerId));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
  alert("Text has been copied.")
}


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


$(document).ready(function(){
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
    $("#myInput").blur(function(){
      $("#myUL2 li a").css("display","none");
      $('.input-search').css("display","none");
    });
  
    $('#findB').click(function(){
      $('.input-search').show();
    });
    $('.ico').click(function(){
      $('.input-search').hide();
    })

});





