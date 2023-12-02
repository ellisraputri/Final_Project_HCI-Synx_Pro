$(document).ready(function(){
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
  
  
  
  


});

/*
$('.copy').click(function(){
  let copy_value = $(this).attr('value');
  CopyToClipboard(copy_value);
});
*/

function topFunction(){
  $('html , body').animate({scrollTop:0},'1000');
}

function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      
      alert("Text has been copied")
    }
  }






