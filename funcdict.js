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






