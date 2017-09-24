// Get the modal
$(function(){
  var modal = $(".loginDialog");
  var modal1 = $(".registerDialog");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("loginDialog-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $(modal).css("display", "none");   
  }

  // Get the <span> element that closes the register modal
  var span1 = document.getElementsByClassName("registerDialog-close")[0];

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    $(modal1).css("display", "none");    
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        $(modal).css("display", "none");
      }
  }

  window.doSomething = function() {
    $(modal).css("display", "block");
  }

  window.doRegister = function() {
    $(modal1).css("display", "block");
    $(modal).css("display", "none");
  }

  window.doRelogin = function() {
    $(modal1).css("display", "none");
    $(modal).css("display", "block");
  }



});
